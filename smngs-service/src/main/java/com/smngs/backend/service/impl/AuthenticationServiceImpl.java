package com.smngs.backend.service.impl;

import com.smngs.backend.dto.auth.RegistrationRequest;
import com.smngs.backend.entity.User;
import com.smngs.backend.enums.UserRole;
import com.smngs.backend.exception.UserAlreadyExistException;
import com.smngs.backend.provider.JwtProvider;
import com.smngs.backend.repository.UserRepository;
import com.smngs.backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;

    @Override
    public Map<String, Object> login(String username, String password) {
        System.out.println(username + " " + password);
        User user = userRepository.findByUsername(username);
        if(user == null) {
            throw new NotFoundException("Error");
        }
        if(!encoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Incorrect password");
        }
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), password));
        String token = jwtProvider.createToken(user.getUsername(), user.getRole().name());
        return new HashMap<String, Object>(){{
            put("user", user);
            put("token", token);
        }};
    }

    @Override
    public User registration(RegistrationRequest registrationRequest) throws UserAlreadyExistException {
        if(userRepository.findByUsername(registrationRequest.getUsername()) != null) {
            throw new UserAlreadyExistException("User already exist");
        }
        User user = new User();
        user.setUsername(registrationRequest.getUsername());
        user.setPassword(new BCryptPasswordEncoder().encode(registrationRequest.getPassword()));
        user.setRole(UserRole.ADMIN);
        return userRepository.save(user);
    }
}

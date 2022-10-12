package com.smnas.backend.service.impl;

import com.smnas.backend.dto.auth.RegistrationRequest;
import com.smnas.backend.entity.User;
import com.smnas.backend.enums.UserRole;
import com.smnas.backend.provider.JwtProvider;
import com.smnas.backend.repository.UserRepository;
import com.smnas.backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    @Override
    public Map<String, Object> login(String username, String password) {
        User user = userRepository.findByUsername(username);
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), password));
        String token = jwtProvider.createToken(user.getUsername(), user.getRole().name());
        return new HashMap<String, Object>(){{
            put("user", user);
            put("token", token);
        }};
    }

    @Override
    public User registration(RegistrationRequest registrationRequest) {
        if(userRepository.findByUsername(registrationRequest.getUsername()) != null) {
            throw new NoSuchElementException("Cannot find user");
        }
        User user = new User();
        user.setUsername(registrationRequest.getUsername());
        user.setPassword(new BCryptPasswordEncoder().encode(registrationRequest.getPassword()));
        user.setRole(UserRole.ADMIN);
        return userRepository.save(user);
    }
}

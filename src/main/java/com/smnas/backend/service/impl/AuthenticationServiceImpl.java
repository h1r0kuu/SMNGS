package com.smnas.backend.service.impl;

import com.smnas.backend.dto.auth.RegistrationRequest;
import com.smnas.backend.dto.user.UserResponse;
import com.smnas.backend.entity.User;
import com.smnas.backend.enums.UserRole;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.mapper.BasicMapper;
import com.smnas.backend.provider.JwtProvider;
import com.smnas.backend.repository.StudentRepository;
import com.smnas.backend.repository.TeacherRepository;
import com.smnas.backend.repository.UserRepository;
import com.smnas.backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.mapper.Mapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;
    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;


    @PersistenceContext
    private final EntityManager entityManager;
    private final BasicMapper mapper;


    @Override
    public Map<String, Object> login(String username, String password) {
        System.out.println(username + " " + password);
        User user = userRepository.findByUsername(username);

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
        return (User) userRepository.save(user);
    }
}

package com.smnas.backend.mapper;

import com.smnas.backend.dto.auth.AuthenticationRequest;
import com.smnas.backend.dto.auth.RegistrationRequest;
import com.smnas.backend.dto.auth.AuthenticationResponse;
import com.smnas.backend.dto.user.UserResponse;
import com.smnas.backend.entity.User;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.provider.JwtProvider;
import com.smnas.backend.service.AuthenticationService;
import com.smnas.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class AuthenticationMapper {

    private final AuthenticationService authenticationService;
    private final BasicMapper mapper;
    private final UserService userService;
    private final JwtProvider jwtProvider;

    public AuthenticationResponse login(AuthenticationRequest authenticationRequest) {
        Map<String, Object> credentials = authenticationService.login(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        return mapper.convertTo(credentials, AuthenticationResponse.class);
    }

    public AuthenticationResponse registration(RegistrationRequest registrationRequest) throws UserAlreadyExistException {
        User user = authenticationService.registration(registrationRequest);
        return login(new AuthenticationRequest(user.getUsername(), registrationRequest.getPassword()));
    }

    public AuthenticationResponse refreshToken(String token) {
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        String username = jwtProvider.getUsername(token);
        User user = userService.findUserByUsername(username);
        String jwt = jwtProvider.createToken(user.getUsername(), user.getRole().toString());
        authenticationResponse.setToken(jwt);
        authenticationResponse.setUser(mapper.convertTo(user, UserResponse.class));
        return authenticationResponse;
    }
}

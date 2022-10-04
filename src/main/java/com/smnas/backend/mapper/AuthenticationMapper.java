package com.smnas.backend.mapper;

import com.smnas.backend.dto.request.AuthenticationRequest;
import com.smnas.backend.dto.request.RegistrationRequest;
import com.smnas.backend.dto.response.AuthenticationResponse;
import com.smnas.backend.entity.User;
import com.smnas.backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class AuthenticationMapper {

    private final AuthenticationService authenticationService;
    private final BasicMapper mapper;

    public AuthenticationResponse login(AuthenticationRequest authenticationRequest) {
        Map<String, Object> credentials = authenticationService.login(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        return mapper.convertTo(credentials, AuthenticationResponse.class);
    }

    public AuthenticationResponse registration(RegistrationRequest registrationRequest) {
        User user = authenticationService.registration(registrationRequest);
        return login(new AuthenticationRequest(user.getUsername(), user.getPassword()));
    }
}

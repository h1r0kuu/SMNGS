package com.smnas.backend.controller;

import com.smnas.backend.dto.auth.AuthenticationRequest;
import com.smnas.backend.dto.auth.RegistrationRequest;
import com.smnas.backend.dto.auth.AuthenticationResponse;
import com.smnas.backend.mapper.AuthenticationMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationMapper authenticationMapper;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest authenticationRequest) {
        return ResponseEntity.ok(authenticationMapper.login(authenticationRequest));
    }

    @PostMapping("/registration")
    public ResponseEntity<AuthenticationResponse> registration(@RequestBody RegistrationRequest registrationRequest) {
        return ResponseEntity.ok(authenticationMapper.registration(registrationRequest));
    }
}

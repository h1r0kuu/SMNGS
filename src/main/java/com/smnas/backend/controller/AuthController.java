package com.smnas.backend.controller;

import com.smnas.backend.dto.auth.AuthenticationRequest;
import com.smnas.backend.dto.auth.RegistrationRequest;
import com.smnas.backend.dto.auth.AuthenticationResponse;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.mapper.AuthenticationMapper;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationMapper authenticationMapper;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@Valid @RequestBody AuthenticationRequest authenticationRequest) {
        return ResponseEntity.ok(authenticationMapper.login(authenticationRequest));
    }

    @PostMapping("/registration")
    public ResponseEntity<AuthenticationResponse> registration(@Valid @RequestBody RegistrationRequest registrationRequest) throws UserAlreadyExistException {
        return ResponseEntity.ok(authenticationMapper.registration(registrationRequest));
    }

    @GetMapping("/refresh")
    public ResponseEntity<AuthenticationResponse> refreshToken(@NonNull @RequestParam("token") String jwtToken) {
        return ResponseEntity.ok(authenticationMapper.refreshToken(jwtToken));
    }
}

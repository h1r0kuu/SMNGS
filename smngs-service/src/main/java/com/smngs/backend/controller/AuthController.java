package com.smngs.backend.controller;

import com.smngs.backend.dto.auth.AuthenticationRequest;
import com.smngs.backend.dto.auth.RegistrationRequest;
import com.smngs.backend.dto.auth.AuthenticationResponse;
import com.smngs.backend.exception.UserAlreadyExistException;
import com.smngs.backend.mapper.AuthenticationMapper;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
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

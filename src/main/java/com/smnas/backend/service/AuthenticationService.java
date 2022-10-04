package com.smnas.backend.service;

import com.smnas.backend.dto.request.RegistrationRequest;
import com.smnas.backend.entity.User;

import java.util.Map;

public interface AuthenticationService {
    Map<String, Object> login(String username, String password);
    User registration(RegistrationRequest registrationRequest);
}

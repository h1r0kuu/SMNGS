package com.smnas.backend.service;

import com.smnas.backend.dto.auth.RegistrationRequest;
import com.smnas.backend.entity.User;
import com.smnas.backend.exception.UserAlreadyExistException;

import java.util.Map;

public interface AuthenticationService {
    Map<String, Object> login(String username, String password);
    User registration(RegistrationRequest registrationRequest) throws UserAlreadyExistException;
}

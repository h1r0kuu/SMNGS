package com.smngs.backend.service;

import com.smngs.backend.dto.auth.RegistrationRequest;
import com.smngs.backend.entity.User;
import com.smngs.backend.exception.UserAlreadyExistException;

import java.util.Map;

public interface AuthenticationService {
    Map<String, Object> login(String username, String password);
    User registration(RegistrationRequest registrationRequest) throws UserAlreadyExistException;
}

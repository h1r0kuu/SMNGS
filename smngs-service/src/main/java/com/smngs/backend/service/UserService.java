package com.smngs.backend.service;

import com.smngs.backend.entity.User;
import com.smngs.backend.enums.UserRole;
import com.smngs.backend.exception.UserAlreadyExistException;

import java.util.List;

public interface UserService {
    User findUserByUsername(String username);
    List<User> findAll();
    List<User> findByRole(UserRole role);
    <T extends User> T create(T user) throws UserAlreadyExistException;

}

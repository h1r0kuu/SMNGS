package com.smnas.backend.service;

import com.smnas.backend.entity.User;
import com.smnas.backend.enums.UserRole;
import com.smnas.backend.exception.UserAlreadyExistException;

import java.util.List;

public interface UserService {
    User findUserByUsername(String username);
    List<User> findAll();
    List<User> findByRole(UserRole role);
    <T extends User> T create(T user) throws UserAlreadyExistException;

}

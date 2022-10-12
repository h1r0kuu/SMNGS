package com.smnas.backend.service;

import com.smnas.backend.entity.User;
import com.smnas.backend.exception.UserAlreadyExistException;

import java.util.List;

public interface UserService {
    User findUserByUsername(String username);

    List<User> findAll();
    User create(User user) throws UserAlreadyExistException;

}

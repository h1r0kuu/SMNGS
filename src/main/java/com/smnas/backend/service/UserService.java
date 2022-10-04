package com.smnas.backend.service;

import com.smnas.backend.entity.User;

public interface UserService {
    User findUserByUsername(String username);

}

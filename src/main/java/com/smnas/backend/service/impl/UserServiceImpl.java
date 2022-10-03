package com.smnas.backend.service.impl;

import com.smnas.backend.repository.UserRepository;
import com.smnas.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
}

package com.smnas.backend.service.impl;

import com.smnas.backend.entity.User;
import com.smnas.backend.enums.UserRole;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.repository.UserRepository;
import com.smnas.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public User create(User user) throws UserAlreadyExistException {
        try {
            if (findUserByUsername(user.getUsername()) != null) {
                throw new UserAlreadyExistException("User already exist");
            }
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        } catch (NoSuchElementException e) {
            System.out.println(e.getMessage());
        }
        return userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return findUserByUsername(username);
    }

    @Override
    public User findUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if(user == null) {
            throw new NoSuchElementException("Cannot find user");
        }
        return user;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public List<User> findByRole(UserRole role) {
        return userRepository.findByRole(role);
    }
}

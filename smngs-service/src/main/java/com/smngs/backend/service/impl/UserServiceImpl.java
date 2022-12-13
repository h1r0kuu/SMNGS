package com.smngs.backend.service.impl;

import com.smngs.backend.entity.User;
import com.smngs.backend.enums.UserRole;
import com.smngs.backend.exception.UserAlreadyExistException;
import com.smngs.backend.repository.UserRepository;
import com.smngs.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    @PersistenceContext
    private final EntityManager entityManager;

    @Override
    @Transactional
    public <T extends User> T create(T user) throws UserAlreadyExistException {
        try {
            if (findUserByUsername(user.getUsername()) != null) {
                throw new UserAlreadyExistException("User already exist");
            }
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        } catch (NoSuchElementException e) {
            System.out.println(e.getMessage());
        }

        entityManager.persist(user);
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return findUserByUsername(username);
    }

    @Override
    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username);
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

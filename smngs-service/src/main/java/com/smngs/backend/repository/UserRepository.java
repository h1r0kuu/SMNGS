package com.smngs.backend.repository;

import com.smngs.backend.entity.User;
import com.smngs.backend.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    List<User> findByRole(UserRole role);
}

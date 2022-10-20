package com.smnas.backend.dto.user;

import com.smnas.backend.enums.UserGender;
import com.smnas.backend.enums.UserRole;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserResponse {
    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private UserRole role;
    private UserGender gender;
    private String email;
    private String profilePicture;
    private String phoneNumber;
    private String phoneCode;
    private LocalDateTime lastLogin;
    private String lastLoginIp;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}

package com.smngs.backend.dto.user;

import com.smngs.backend.enums.UserGender;
import com.smngs.backend.enums.UserRole;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
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

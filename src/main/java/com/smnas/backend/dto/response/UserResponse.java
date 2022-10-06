package com.smnas.backend.dto.response;

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
    private String email;
    private String profilePicture;
    private Integer phoneNumber;
    private Integer phoneCode;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}

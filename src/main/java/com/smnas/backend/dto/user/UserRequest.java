package com.smnas.backend.dto.user;

import com.smnas.backend.enums.UserRole;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class UserRequest {
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String username;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String password;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String firstName;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String lastName;
    @NotNull
    @NotBlank
    private UserRole role;
    private String email;
    private String profilePicture;
    private Integer phoneNumber;
    private Integer phoneCode;
}

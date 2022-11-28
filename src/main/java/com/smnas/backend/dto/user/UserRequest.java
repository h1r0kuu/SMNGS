package com.smnas.backend.dto.user;

import com.smnas.backend.enums.UserGender;
import com.smnas.backend.enums.UserRole;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class UserRequest {
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String username;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String password;
    private String email;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String firstName;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String lastName;
    @NotNull
    private UserRole role;
    @NotNull
    private UserGender gender;
    private String phoneNumber;
    private String phoneCode;
    private MultipartFile profilePicture;
}

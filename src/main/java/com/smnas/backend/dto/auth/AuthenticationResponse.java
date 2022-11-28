package com.smnas.backend.dto.auth;

import com.smnas.backend.dto.user.UserResponse;
import com.smnas.backend.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationResponse {
    private UserResponse user;
    private String token;
}

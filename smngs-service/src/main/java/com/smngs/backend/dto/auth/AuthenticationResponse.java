package com.smngs.backend.dto.auth;

import com.smngs.backend.dto.user.UserResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationResponse {
    private UserResponse user;
    private String token;
}

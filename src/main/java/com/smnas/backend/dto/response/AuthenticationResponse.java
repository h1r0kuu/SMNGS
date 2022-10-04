package com.smnas.backend.dto.response;

import com.smnas.backend.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationResponse {
    private User user;
    private String token;
}

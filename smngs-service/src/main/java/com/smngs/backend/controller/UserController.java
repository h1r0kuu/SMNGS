package com.smngs.backend.controller;

import com.smngs.backend.dto.user.UserRequest;
import com.smngs.backend.dto.user.UserResponse;
import com.smngs.backend.enums.UserRole;
import com.smngs.backend.exception.UserAlreadyExistException;
import com.smngs.backend.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserMapper userMapper;

    @GetMapping
    private ResponseEntity<List<UserResponse>> getAll() {
        List<UserResponse> users = userMapper.getAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{username}")
    private ResponseEntity<UserResponse> getByUsername(@PathVariable("username") String username) {
        UserResponse user = userMapper.getByUsername(username);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/role/{role}")
    private ResponseEntity<List<UserResponse>> getAllByRole(@PathVariable("role") UserRole role) {
        List<UserResponse> users = userMapper.getAllByRole(role);
        return ResponseEntity.ok(users);
    }

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    private ResponseEntity<UserResponse> create(@Valid @ModelAttribute UserRequest userRequest) throws UserAlreadyExistException {
        UserResponse user = userMapper.create(userRequest);
        return ResponseEntity.ok(user);
    }
}

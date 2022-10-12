package com.smnas.backend.mapper;

import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.dto.user.UserRequest;
import com.smnas.backend.dto.user.UserResponse;
import com.smnas.backend.entity.Student;
import com.smnas.backend.entity.User;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class UserMapper {

    private final UserService userService;
    private final BasicMapper mapper;

    public List<UserResponse> getAll() {
        return mapper.convertListTo(userService.findAll(), UserResponse.class);
    }

    public UserResponse create(UserRequest userRequest) throws UserAlreadyExistException {
        User user = mapper.convertTo(userRequest, User.class);
        return mapper.convertTo(userService.create(user), UserResponse.class);
    }
}

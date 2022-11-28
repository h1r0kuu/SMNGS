package com.smnas.backend.dto.teacher;

import com.smnas.backend.dto.user.UserResponse;
import lombok.Data;

@Data
public class TeacherResponse extends UserResponse {
    private String qualification;
}

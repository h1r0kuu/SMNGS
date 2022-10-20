package com.smnas.backend.dto.teacher;

import com.smnas.backend.dto.user.UserRequest;
import lombok.Data;

@Data
public class TeacherRequest extends UserRequest {
    private String qualification;
}

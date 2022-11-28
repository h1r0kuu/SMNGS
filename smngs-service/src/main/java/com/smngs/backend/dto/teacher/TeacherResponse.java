package com.smngs.backend.dto.teacher;

import com.smngs.backend.dto.user.UserResponse;
import lombok.Data;

@Data
public class TeacherResponse extends UserResponse {
    private String qualification;
}

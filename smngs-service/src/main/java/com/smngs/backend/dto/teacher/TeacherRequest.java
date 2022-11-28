package com.smngs.backend.dto.teacher;

import com.smngs.backend.dto.user.UserRequest;
import lombok.Data;

@Data
public class TeacherRequest extends UserRequest {
    private Long id;
    private String qualification;
}

package com.smngs.backend.dto.student;

import lombok.Data;

@Data
public class StudentUpdateRequest extends StudentRequest {
    private Long id;
}

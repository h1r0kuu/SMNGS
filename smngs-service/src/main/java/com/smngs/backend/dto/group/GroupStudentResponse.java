package com.smngs.backend.dto.group;

import com.smngs.backend.dto.user.UserResponse;
import com.smngs.backend.enums.StudentStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class GroupStudentResponse {
    private Long id;
    private UserResponse info;
    private StudentStatus status;
    private Integer term;
    private String specialization;
    private String degreeCourse;
    private LocalDate birthDate;
    private String address;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

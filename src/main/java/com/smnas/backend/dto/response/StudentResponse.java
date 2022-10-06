package com.smnas.backend.dto.response;

import com.smnas.backend.enums.StudentStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class StudentResponse {
    private Long id;
    private UserResponse info;
    private StudentStatus status;
    private Integer term;
    private String specialization;
    private String degreeCourse;
    private LocalDate birthDate;
    private String address;
    private StudentGroupResponse group;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

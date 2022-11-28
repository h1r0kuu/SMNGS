package com.smngs.backend.dto.student;

import com.smngs.backend.dto.user.UserResponse;
import com.smngs.backend.enums.StudentStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class StudentResponse extends UserResponse {
    private StudentStatus status;
    private Integer term;
    private String specialization;
    private String degreeCourse;
    private LocalDate birthDate;
    private String fatherName;
    private String fatherMobile;
    private String fatherEmail;
    private String motherName;
    private String motherMobile;
    private String motherEmail;
    private String presentAddress;
    private String permanentAddress;
    private StudentGroupResponse group;
}

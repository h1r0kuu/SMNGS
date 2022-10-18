package com.smnas.backend.dto.student;

import com.smnas.backend.dto.user.UserRequest;
import com.smnas.backend.enums.StudentStatus;
import lombok.Data;

import javax.validation.constraints.*;
import java.time.LocalDate;

@Data
public class StudentRequest extends UserRequest {
    private StudentStatus status;
    @Max(12)
    private Integer term;
    @NotBlank
    @NotNull
    private String specialization;
    @NotBlank
    @NotNull
    private String degreeCourse;
    private LocalDate birthDate;
    @NotBlank
    private String fatherName;
    @NotBlank
    private String fatherMobile;
    @NotBlank
    private String fatherEmail;
    @NotBlank
    private String motherName;
    @NotBlank
    private String motherMobile;
    @NotBlank
    private String motherEmail;
    @NotBlank
    private String presentAddress;
    @NotBlank
    private String permanentAddress;
}

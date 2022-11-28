package com.smngs.backend.dto.student;

import com.smngs.backend.dto.user.UserRequest;
import com.smngs.backend.enums.StudentStatus;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.time.LocalDate;

@Data
public class StudentRequest extends UserRequest {
    private Long id;
    private StudentStatus status;
    @Max(12)
    private Integer term;
    @NotBlank
    @NotNull
    private String specialization;
    @NotBlank
    @NotNull
    private String degreeCourse;
    @DateTimeFormat(pattern= "yyyy-MM-dd")
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
    private Long groupId;
}

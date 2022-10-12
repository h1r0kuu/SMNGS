package com.smnas.backend.dto.student;

import com.smnas.backend.dto.user.UserRequest;
import com.smnas.backend.enums.StudentStatus;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter
@Setter
public class StudentRequest {
    private UserRequest info;
    private StudentStatus status;
    @Size(max = 12)
    private Integer term;
    @NotBlank
    @NotNull
    private String specialization;
    @NotBlank
    @NotNull
    private String degreeCourse;
    private LocalDate birthDate;
    private String address;
}

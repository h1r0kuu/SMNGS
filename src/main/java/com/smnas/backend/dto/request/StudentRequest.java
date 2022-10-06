package com.smnas.backend.dto.request;

import com.smnas.backend.enums.StudentStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class StudentRequest {
    private Long id;
//    private User info;
    private StudentStatus status;
    private Integer term;
    private String specialization;
    private String degreeCourse;
    private LocalDate birthDate;
    private String address;
}

package com.smnas.backend.dto.grade;

import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.enums.GradeType;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class GradeResponse {
    private Long id;
    private Float grade;
    private LocalDate gradeDate;
    private GradeType gradeType;
    private StudentResponse student;
    private LocalDateTime updatedAt;
}

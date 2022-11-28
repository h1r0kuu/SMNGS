package com.smngs.backend.dto.grade;

import com.smngs.backend.dto.student.StudentResponse;
import com.smngs.backend.enums.GradeType;

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

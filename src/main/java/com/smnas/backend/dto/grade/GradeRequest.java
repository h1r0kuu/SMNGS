package com.smnas.backend.dto.grade;

import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.enums.GradeType;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class GradeRequest {
    @NotNull
    @NotBlank
    private Float grade;
    private LocalDate date;
    @NotNull
    @NotBlank
    private GradeType gradeType;
    private StudentRequest student;
}

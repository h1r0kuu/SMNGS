package com.smngs.backend.dto.grade;

import com.smngs.backend.dto.student.StudentRequest;
import com.smngs.backend.enums.GradeType;
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

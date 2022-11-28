package com.smnas.backend.dto.group;

import com.smnas.backend.dto.teachersubject.TeacherSubjectResponse;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@Getter
@Setter
public class GroupRequest {

    private Long id;

    @Positive
    @Max(value = 10)
    private Integer groupTerm;

    @NotBlank
    @NotNull
    private String groupName;

    private List<TeacherSubjectResponse> teacherSubjects;
}
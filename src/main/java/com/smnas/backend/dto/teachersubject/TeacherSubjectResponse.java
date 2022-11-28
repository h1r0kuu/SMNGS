package com.smnas.backend.dto.teachersubject;

import com.smnas.backend.dto.subject.SubjectResponse;
import com.smnas.backend.dto.teacher.TeacherResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeacherSubjectResponse {
    private Long id;
    private TeacherResponse teacher;
    private SubjectResponse subject;
}

package com.smngs.backend.dto.teachersubject;

import com.smngs.backend.dto.subject.SubjectResponse;
import com.smngs.backend.dto.teacher.TeacherResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeacherSubjectResponse {
    private Long id;
    private TeacherResponse teacher;
    private SubjectResponse subject;
}

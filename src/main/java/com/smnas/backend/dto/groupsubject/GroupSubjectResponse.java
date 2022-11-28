package com.smnas.backend.dto.groupsubject;

import com.smnas.backend.dto.teachersubject.TeacherSubjectResponse;
import lombok.Data;


@Data
public class GroupSubjectResponse {
    private Long id;
//    private GroupResponse group;
    private TeacherSubjectResponse teacherSubject;
}

package com.smngs.backend.dto.groupsubject;

import com.smngs.backend.dto.teachersubject.TeacherSubjectResponse;
import lombok.Data;


@Data
public class GroupSubjectResponse {
    private Long id;
//    private GroupResponse group;
    private TeacherSubjectResponse teacherSubject;
}

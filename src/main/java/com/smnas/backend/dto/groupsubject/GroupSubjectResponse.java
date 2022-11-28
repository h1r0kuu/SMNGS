package com.smnas.backend.dto.groupsubject;

import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.dto.teachersubject.TeacherSubjectResponse;
import lombok.Data;

import java.util.List;

@Data
public class GroupSubjectResponse {
    private Long id;
//    private GroupResponse group;
    private TeacherSubjectResponse teacherSubject;
}

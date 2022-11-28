package com.smnas.backend.dto.schedule;

import com.smnas.backend.dto.group.GroupRequest;
import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.dto.groupsubject.GroupSubjectResponse;
import com.smnas.backend.dto.subject.SubjectRequest;
import com.smnas.backend.dto.teachersubject.TeacherSubjectResponse;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
public class ScheduleRequest {
    @NotNull
    private Long groupId;
    @NotNull
    private Long groupSubjectId;
    private LocalDateTime timeStart;
    private LocalDateTime timeEnd;
}

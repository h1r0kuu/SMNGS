package com.smnas.backend.dto.schedule;

import com.smnas.backend.dto.group.GroupRequest;
import com.smnas.backend.dto.subject.SubjectRequest;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
public class ScheduleRequest {
    @NotNull
    private GroupRequest group;
    @NotNull
    private SubjectRequest subject;
    private LocalDateTime timeStart;
    private LocalDateTime timeEnd;
}

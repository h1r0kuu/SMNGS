package com.smnas.backend.dto.schedule;

import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.dto.groupsubject.GroupSubjectResponse;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ScheduleResponse {
    private Long id;
    private GroupResponse group;
    private GroupSubjectResponse subject;
    private LocalDateTime timeStart;
    private LocalDateTime timeEnd;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

package com.smngs.backend.dto.schedule;

import com.smngs.backend.dto.group.GroupResponse;
import com.smngs.backend.dto.groupsubject.GroupSubjectResponse;
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

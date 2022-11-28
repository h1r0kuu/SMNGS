package com.smnas.backend.dto.schedule;

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

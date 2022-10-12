package com.smnas.backend.mapper;

import com.smnas.backend.dto.schedule.ScheduleRequest;
import com.smnas.backend.dto.schedule.ScheduleResponse;
import com.smnas.backend.entity.Schedule;
import com.smnas.backend.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ScheduleMapper {

    private final ScheduleService scheduleService;
    private final BasicMapper mapper;

    public ScheduleResponse create(ScheduleRequest scheduleRequest) {
        Schedule schedule = mapper.convertTo(scheduleRequest, Schedule.class);
        return mapper.convertTo(scheduleService.create(schedule), ScheduleResponse.class);
    }
}

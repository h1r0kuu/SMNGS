package com.smnas.backend.controller;

import com.smnas.backend.dto.schedule.ScheduleRequest;
import com.smnas.backend.dto.schedule.ScheduleResponse;
import com.smnas.backend.mapper.ScheduleMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/schedules")
@RequiredArgsConstructor
public class ScheduleController {

    private final ScheduleMapper scheduleMapper;

    @PostMapping
    private ResponseEntity<ScheduleResponse> create(@Valid @RequestBody ScheduleRequest scheduleRequest) {
        ScheduleResponse schedule = scheduleMapper.create(scheduleRequest);
        return ResponseEntity.ok(schedule);
    }

}

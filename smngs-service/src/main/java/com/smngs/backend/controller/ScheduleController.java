package com.smngs.backend.controller;

import com.smngs.backend.dto.schedule.ScheduleRequest;
import com.smngs.backend.dto.schedule.ScheduleResponse;
import com.smngs.backend.mapper.ScheduleMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/schedules")
@RequiredArgsConstructor
public class ScheduleController {

    private final ScheduleMapper scheduleMapper;

    @GetMapping
    private ResponseEntity<Page<ScheduleResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<ScheduleResponse> schedules = scheduleMapper.findAll(pageable);
        return ResponseEntity.ok(schedules);
    }

    @PostMapping
    private ResponseEntity<ScheduleResponse> create(@Valid @RequestBody ScheduleRequest scheduleRequest) {
        ScheduleResponse schedule = scheduleMapper.create(scheduleRequest);
        return ResponseEntity.ok(schedule);
    }

}

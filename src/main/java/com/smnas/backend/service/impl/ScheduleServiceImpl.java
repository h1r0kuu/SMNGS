package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Schedule;
import com.smnas.backend.repository.ScheduleRepository;
import com.smnas.backend.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {

    private final ScheduleRepository scheduleRepository;

    @Override
    public Schedule create(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    @Override
    public Schedule findById(Long scheduleId) {
        return scheduleRepository.findById(scheduleId).orElseThrow(() -> new NoSuchElementException("Cannot find schedule with that id"));
    }

    @Override
    public Schedule update(Long scheduleId, Schedule schedule) {
        Schedule oldSchedule = findById(scheduleId);
        oldSchedule.setSubject(schedule.getSubject());
        schedule.setGroup(schedule.getGroup());
        schedule.setTimeStart(schedule.getTimeStart());
        schedule.setTimeEnd(schedule.getTimeEnd());
        return scheduleRepository.save(oldSchedule);
    }
}

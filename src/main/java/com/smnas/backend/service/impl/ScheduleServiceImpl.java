package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Schedule;
import com.smnas.backend.repository.ScheduleRepository;
import com.smnas.backend.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
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
    public List<Schedule> findAll() {
        return scheduleRepository.findAll();
    }

    @Override
    public Page<Schedule> findAll(Pageable pageable) {
        return scheduleRepository.findAll(pageable);
    }

    @Override
    public Schedule findById(Long id) {
        return scheduleRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find schedule with that id"));
    }

    @Override
    public void deleteById(Long id) {
        scheduleRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        scheduleRepository.deleteAllById(ids);
    }

    @Override
    public Schedule update(Schedule schedule) {
        return create(schedule);
    }
}

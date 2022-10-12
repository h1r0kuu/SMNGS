package com.smnas.backend.service;

import com.smnas.backend.entity.Grade;
import com.smnas.backend.entity.Schedule;

public interface ScheduleService {

    Schedule create(Schedule schedule);
    Schedule findById(Long scheduleId);
    Schedule update(Long scheduleId, Schedule schedule);

}

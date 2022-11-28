package com.smngs.backend.mapper;

import com.smngs.backend.dto.schedule.ScheduleRequest;
import com.smngs.backend.dto.schedule.ScheduleResponse;
import com.smngs.backend.entity.Group;
import com.smngs.backend.entity.GroupSubject;
import com.smngs.backend.entity.Schedule;
import com.smngs.backend.service.GroupService;
import com.smngs.backend.service.GroupSubjectService;
import com.smngs.backend.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ScheduleMapper implements MapperInterface<ScheduleRequest, ScheduleResponse> {

    private final ScheduleService scheduleService;
    private final GroupService groupService;
    private final GroupSubjectService groupSubjectService;
    private final BasicMapper mapper;

    @Override
    public ScheduleResponse create(ScheduleRequest scheduleRequest) {
        Group group = groupService.findById(scheduleRequest.getGroupId());
        GroupSubject groupSubject = groupSubjectService.findById(scheduleRequest.getGroupSubjectId());
        Schedule schedule = new Schedule(null, group, groupSubject, scheduleRequest.getTimeStart(), scheduleRequest.getTimeEnd(), null, null);
        Schedule createdSchedule = scheduleService.create(schedule);
        System.out.println(createdSchedule.toString());
        return mapper.convertTo(createdSchedule, ScheduleResponse.class);
    }

    @Override
    public List<ScheduleResponse> findAll() {
        return mapper.convertListTo(scheduleService.findAll(), ScheduleResponse.class);
    }

    @Override
    public Page<ScheduleResponse> findAll(Pageable pageable) {
        return scheduleService.findAll(pageable).map(s -> mapper.convertTo(s, ScheduleResponse.class));
    }

    @Override
    public ScheduleResponse findById(Long id) {
        return mapper.convertTo(scheduleService.findById(id), ScheduleResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        scheduleService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        scheduleService.deleteAllById(ids);
    }

    @Override
    public ScheduleResponse update(ScheduleRequest scheduleRequest) {
        Schedule schedule = scheduleService.update(mapper.convertTo(scheduleRequest, Schedule.class));
        return mapper.convertTo(schedule, ScheduleResponse.class);
    }
}

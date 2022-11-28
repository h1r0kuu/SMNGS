package com.smnas.backend.mapper;

import com.smnas.backend.dto.group.*;
import com.smnas.backend.dto.groupsubject.GroupSubjectRequest;
import com.smnas.backend.dto.groupsubject.GroupSubjectResponse;
import com.smnas.backend.dto.schedule.ScheduleResponse;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.dto.teachersubject.TeacherSubjectResponse;
import com.smnas.backend.entity.*;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class GroupMapper implements MapperInterface<GroupRequest, GroupResponse> {

    private final GroupService groupService;
    private final GroupSubjectService groupSubjectService;
    private final TeacherSubjectService teacherSubjectService;
    private final BasicMapper mapper;

    @Override
    public GroupResponse create(GroupRequest groupRequest) {
        System.out.println(groupRequest);
        Group group = groupService.create(mapper.convertTo(groupRequest, Group.class));
        for(TeacherSubjectResponse t : groupRequest.getTeacherSubjects()) {
            GroupSubject groupSubject = new GroupSubject();
            groupSubject.setTeacherSubject(mapper.convertTo(t, TeacherSubject.class));
            groupSubject.setGroup(group);
            groupSubjectService.create(groupSubject);
        }
        return mapper.convertTo(group, GroupResponse.class);
    }

    @Override
    public List<GroupResponse> findAll() {
        return mapper.convertListTo(groupService.findAll(), GroupResponse.class);
    }

    @Override
    public Page<GroupResponse> findAll(Pageable pageable) {
        return groupService.findAll(pageable).map(g -> mapper.convertTo(g, GroupResponse.class));
    }

    @Override
    public GroupResponse findById(Long id) {
        return mapper.convertTo(groupService.findById(id), GroupResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        groupService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        groupService.deleteAllById(ids);
    }

    @Override
    public GroupResponse update(GroupRequest groupRequest) {
        List<GroupSubject> groupSubjects = new ArrayList<>();
        for(TeacherSubjectResponse teacherSubjectResponse : groupRequest.getTeacherSubjects()) {
            GroupSubject groupSubject = new GroupSubject();
            TeacherSubject teacherSubject = teacherSubjectService.findById(teacherSubjectResponse.getId());
            groupSubject.setGroup(groupService.findById(groupRequest.getId()));
            groupSubject.setTeacherSubject(teacherSubject);
            groupSubjects.add(groupSubject);
            groupSubjectService.create(groupSubject);
        }

        Group group = mapper.convertTo(groupRequest, Group.class);
        group.setGroupSubjects(groupSubjects);
        return mapper.convertTo(groupService.update(group), GroupResponse.class);
    }

    public GroupSubjectResponse createGroupSubject(GroupSubjectRequest groupSubjectRequest) {
        GroupSubject groupSubject = new GroupSubject();
        Group group = groupService.findById(groupSubjectRequest.getGroupId());
        TeacherSubject teacherSubject = teacherSubjectService.findById(groupSubjectRequest.getTeacherSubjectId());
        groupSubject.setGroup(group);
        groupSubject.setTeacherSubject(teacherSubject);
        return mapper.convertTo(groupSubjectService.create(groupSubject), GroupSubjectResponse.class);
    }

    public Page<StudentResponse> getStudents(Long groupId, Pageable pageable) {
        return groupService.getStudents(groupId, pageable).map(s -> mapper.convertTo(s, StudentResponse.class));
    }

    public List<ScheduleResponse> getSchedule(Long groupId) {
        return mapper.convertListTo(groupService.getSchedule(groupId), ScheduleResponse.class);
    }

    public GroupResponse addStudent(Long groupId, GroupAddStudentRequest studentRequest) throws UserAlreadyExistException {
        return mapper.convertTo(groupService.addStudent(groupId, studentRequest.getStudentId()), GroupResponse.class);
    }

    public GroupResponse removeStudent(Long groupId, GroupAddStudentRequest student) {
        return mapper.convertTo(groupService.removeStudent(groupId, student.getStudentId()), GroupResponse.class);
    }

    public GroupResponse addTeacher(Long groupId, GroupAddTeacherRequest teacher) throws UserAlreadyExistException {
        return mapper.convertTo(groupService.addTeacher(groupId, teacher.getTeacherId()), GroupResponse.class);
    }

    public GroupResponse removeTeacher(Long groupId, GroupAddTeacherRequest teacher) {
        return mapper.convertTo(groupService.removeTeacher(groupId, teacher.getTeacherId()), GroupResponse.class);
    }

    public GroupResponse addSubject(Long groupId, GroupAddSubjectRequest subject) throws UserAlreadyExistException {
        return mapper.convertTo(groupService.addSubject(groupId, subject.getSubjectId()), GroupResponse.class);
    }

    public GroupResponse removeSubject(Long groupId, GroupAddSubjectRequest subject) {
        return mapper.convertTo(groupService.removeSubject(groupId, subject.getSubjectId()), GroupResponse.class);
    }
}

package com.smnas.backend.controller;

import com.smnas.backend.dto.group.*;
import com.smnas.backend.dto.groupsubject.GroupSubjectRequest;
import com.smnas.backend.dto.groupsubject.GroupSubjectResponse;
import com.smnas.backend.dto.schedule.ScheduleResponse;
import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.dto.teacher.TeacherRequest;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.mapper.GroupMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/groups")
@RequiredArgsConstructor
public class GroupController {

    private final GroupMapper groupMapper;

    @GetMapping
    private ResponseEntity<Page<GroupResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<GroupResponse> groups = groupMapper.findAll(pageable);
        return ResponseEntity.ok(groups);
    }

    @PostMapping
    private ResponseEntity<GroupResponse> create(@Valid @RequestBody GroupRequest groupRequest) {
        GroupResponse group = groupMapper.create(groupRequest);
        return ResponseEntity.ok(group);
    }

    @PutMapping
    private ResponseEntity<GroupResponse> update(@Valid @RequestBody GroupRequest groupRequest) {
        GroupResponse group = groupMapper.update(groupRequest);
        return ResponseEntity.ok(group);
    }

    @GetMapping("/{groupId}")
    private ResponseEntity<GroupResponse> getById(@PathVariable("groupId") Long groupId) {
        return ResponseEntity.ok(groupMapper.findById(groupId));
    }

    @DeleteMapping("/{groupId}")
    private ResponseEntity<String> deleteById(@PathVariable("groupId") Long groupId) {
        groupMapper.deleteById(groupId);
        return ResponseEntity.ok("Dsadsa");
    }

    @GetMapping("/{groupId}/schedule")
    private ResponseEntity<List<ScheduleResponse>> getSchedule(@PathVariable("groupId") Long groupId) {
        List<ScheduleResponse> schedules = groupMapper.getSchedule(groupId);
        return ResponseEntity.ok(schedules);
    }

    @GetMapping("/{groupId}/students")
    private ResponseEntity<Page<StudentResponse>> getStudents(@PathVariable("groupId") Long groupId,
                                                              @PageableDefault Pageable pageable) {
        Page<StudentResponse> students = groupMapper.getStudents(groupId, pageable);
        return ResponseEntity.ok(students);
    }

    @PostMapping("/group-subject")
    private ResponseEntity<GroupSubjectResponse> createGroupSubject(@RequestBody GroupSubjectRequest groupSubjectRequest) throws UserAlreadyExistException {
        return ResponseEntity.ok(groupMapper.createGroupSubject(groupSubjectRequest));
    }

    @PatchMapping("/{groupId}/add-student")
    private ResponseEntity<GroupResponse> addStudent(@PathVariable("groupId") Long groupId, @RequestBody GroupAddStudentRequest student) throws UserAlreadyExistException {
        return ResponseEntity.ok(groupMapper.addStudent(groupId, student));
    }

    @PatchMapping("/{groupId}/remove-student")
    private ResponseEntity<GroupResponse> removeStudent(@PathVariable("groupId") Long groupId, @RequestBody GroupAddStudentRequest student) {
        return ResponseEntity.ok(groupMapper.removeStudent(groupId, student));
    }

    @PatchMapping("/{groupId}/add-teacher")
    private ResponseEntity<GroupResponse> addTeacher(@PathVariable("groupId") Long groupId, @RequestBody GroupAddTeacherRequest teacher) throws UserAlreadyExistException {
        return ResponseEntity.ok(groupMapper.addTeacher(groupId, teacher));
    }

    @PatchMapping("/{groupId}/remove-teacher")
    private ResponseEntity<GroupResponse> removeTeacher(@PathVariable("groupId") Long groupId, @RequestBody GroupAddTeacherRequest teacher) {
        return ResponseEntity.ok(groupMapper.removeTeacher(groupId, teacher));
    }

    @PatchMapping("/{groupId}/add-subject")
    private ResponseEntity<GroupResponse> addSubject(@PathVariable("groupId") Long groupId, @RequestBody GroupAddSubjectRequest subject) throws UserAlreadyExistException {
        return ResponseEntity.ok(groupMapper.addSubject(groupId, subject));
    }

    @PatchMapping("/{groupId}/remove-subject")
    private ResponseEntity<GroupResponse> removeSubject(@PathVariable("groupId") Long groupId, @RequestBody GroupAddSubjectRequest subject) throws UserAlreadyExistException {
        return ResponseEntity.ok(groupMapper.removeSubject(groupId, subject));
    }
}

package com.smnas.backend.controller;

import com.smnas.backend.dto.group.GroupAddStudentRequest;
import com.smnas.backend.dto.group.GroupRequest;
import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.mapper.GroupMapper;
import lombok.RequiredArgsConstructor;
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
    private ResponseEntity<List<GroupResponse>> getAll() {
        List<GroupResponse> groups = groupMapper.getAll();
        return ResponseEntity.ok(groups);
    }

    @PostMapping
    private ResponseEntity<GroupResponse> create(@Valid @RequestBody GroupRequest groupRequest) {
        GroupResponse group = groupMapper.create(groupRequest);
        return ResponseEntity.ok(group);
    }

    @GetMapping("/{groupId}")
    private ResponseEntity<GroupResponse> getById(@PathVariable("groupId") Long groupId) {
        return ResponseEntity.ok(groupMapper.getById(groupId));
    }

    @DeleteMapping("/{groupId}")
    private ResponseEntity<String> deleteById(@PathVariable("groupId") Long groupId) {
        groupMapper.deleteById(groupId);
        return ResponseEntity.ok("Dsadsa");
    }

    @GetMapping("/{groupId}/students")
    private ResponseEntity<List<StudentResponse>> getStudents(@PathVariable("groupId") Long groupId) {
        List<StudentResponse> students = groupMapper.getStudents(groupId);
        return ResponseEntity.ok(students);
    }

    @PatchMapping("/{groupId}/add-student")
    private ResponseEntity<GroupResponse> addStudent(@PathVariable("groupId") Long groupId, @RequestBody GroupAddStudentRequest student) throws UserAlreadyExistException {
        return ResponseEntity.ok(groupMapper.addStudent(groupId, student));
    }

    @PatchMapping("/{groupId}/remove-student")
    private ResponseEntity<GroupResponse> removeStudent(@PathVariable("groupId") Long groupId, @Valid @RequestBody StudentRequest student) {
        return ResponseEntity.ok(groupMapper.removeStudent(groupId, student));
    }

}

package com.smnas.backend.controller;

import com.smnas.backend.dto.request.GroupRequest;
import com.smnas.backend.dto.request.StudentRequest;
import com.smnas.backend.dto.response.GroupResponse;
import com.smnas.backend.mapper.GroupMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    private ResponseEntity<GroupResponse> create(@RequestBody GroupRequest groupRequest) {
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


    @PatchMapping("/{groupId}/addStudent")
    private ResponseEntity<GroupResponse> addStudent(@PathVariable("groupId") Long groupId, @RequestBody StudentRequest student) {
        return ResponseEntity.ok(groupMapper.addStudent(groupId, student));
    }

    @DeleteMapping("/{groupId}/removeStudent")
    private ResponseEntity<GroupResponse> removeStudent(@PathVariable("groupId") Long groupId, @RequestBody StudentRequest student) {
        return ResponseEntity.ok(groupMapper.removeStudent(groupId, student));
    }

}

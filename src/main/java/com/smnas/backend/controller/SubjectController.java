package com.smnas.backend.controller;

import com.smnas.backend.dto.subject.SubjectRequest;
import com.smnas.backend.dto.user.UserRequest;
import com.smnas.backend.dto.subject.SubjectResponse;
import com.smnas.backend.mapper.SubjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/subjects")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectMapper subjectMapper;

    @GetMapping
    private ResponseEntity<List<SubjectResponse>> getAll() {
        List<SubjectResponse> subjects = subjectMapper.getAll();
        return ResponseEntity.ok(subjects);
    }

    @PostMapping
    private ResponseEntity<SubjectResponse> create(@RequestBody SubjectRequest subjectRequest) {
        SubjectResponse newSubject = subjectMapper.create(subjectRequest);
        return ResponseEntity.ok(newSubject);
    }

    @GetMapping("/{subjectId}")
    private ResponseEntity<SubjectResponse> getById(@PathVariable("subjectId") Long subjectId) {
        SubjectResponse subject = subjectMapper.getById(subjectId);
        return ResponseEntity.ok(subject);
    }

    @DeleteMapping("/{subjectId}")
    private ResponseEntity<String> deleteById(@PathVariable("subjectId") Long subjectId) {
        subjectMapper.deleteById(subjectId);
        return ResponseEntity.ok("Subject successfully deleted");
    }

    @PatchMapping("/{subjectId}")
    private ResponseEntity<SubjectResponse> changeById(@PathVariable("subjectId") Long subjectId, @RequestBody SubjectRequest newSubject) {
        SubjectResponse subject = subjectMapper.changeById(subjectId, newSubject);
        return ResponseEntity.ok(subject);
    }

    @PatchMapping("/{subjectId}/addTeacher")
    private ResponseEntity<SubjectResponse> addTeacher(@PathVariable("subjectId") Long subjectId, @RequestBody UserRequest userRequest) {
        SubjectResponse subject = subjectMapper.addTeacher(subjectId, userRequest);
        return ResponseEntity.ok(subject);
    }

    @PatchMapping("/{subjectId}/removeTeacher")
    private ResponseEntity<SubjectResponse> removeTeacher(@PathVariable("subjectId") Long subjectId, @RequestBody UserRequest userRequest) {
        SubjectResponse subject = subjectMapper.removeTeacher(subjectId, userRequest);
        return ResponseEntity.ok(subject);
    }
}

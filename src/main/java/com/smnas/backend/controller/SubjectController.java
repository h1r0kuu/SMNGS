package com.smnas.backend.controller;

import com.smnas.backend.dto.subject.SubjectRequest;
import com.smnas.backend.dto.teacher.TeacherRequest;
import com.smnas.backend.dto.user.UserRequest;
import com.smnas.backend.dto.subject.SubjectResponse;
import com.smnas.backend.mapper.SubjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/subjects")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectMapper subjectMapper;

    @GetMapping
    private ResponseEntity<Page<SubjectResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<SubjectResponse> subjects = subjectMapper.findAll(pageable);
        return ResponseEntity.ok(subjects);
    }

    @PostMapping
    private ResponseEntity<SubjectResponse> create(@Valid @RequestBody SubjectRequest subjectRequest) {
        SubjectResponse newSubject = subjectMapper.create(subjectRequest);
        return ResponseEntity.ok(newSubject);
    }

    @GetMapping("/{subjectId}")
    private ResponseEntity<SubjectResponse> getById(@PathVariable("subjectId") Long subjectId) {
        SubjectResponse subject = subjectMapper.findById(subjectId);
        return ResponseEntity.ok(subject);
    }

    @DeleteMapping("/{subjectId}")
    private ResponseEntity<String> deleteById(@PathVariable("subjectId") Long subjectId) {
        subjectMapper.deleteById(subjectId);
        return ResponseEntity.ok("Subject successfully deleted");
    }

    @PatchMapping("/{subjectId}")
    private ResponseEntity<SubjectResponse> changeById(@PathVariable("subjectId") Long subjectId, @Valid @RequestBody SubjectRequest newSubject) {
        SubjectResponse subject = subjectMapper.changeById(subjectId, newSubject);
        return ResponseEntity.ok(subject);
    }

    @PatchMapping("/{subjectId}/add-teacher")
    private ResponseEntity<SubjectResponse> addTeacher(@PathVariable("subjectId") Long subjectId, @Valid @RequestBody TeacherRequest teacherRequest) {
        SubjectResponse subject = subjectMapper.addTeacher(subjectId, teacherRequest);
        return ResponseEntity.ok(subject);
    }

    @PatchMapping("/{subjectId}/remove-teacher")
    private ResponseEntity<SubjectResponse> removeTeacher(@PathVariable("subjectId") Long subjectId, @Valid @RequestBody TeacherRequest teacherRequest) {
        SubjectResponse subject = subjectMapper.removeTeacher(subjectId, teacherRequest);
        return ResponseEntity.ok(subject);
    }
}

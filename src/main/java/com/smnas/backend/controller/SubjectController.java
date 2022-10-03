package com.smnas.backend.controller;

import com.smnas.backend.dto.response.SubjectResponse;
import com.smnas.backend.mapper.SubjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/subjects")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectMapper subjectMapper;

    @GetMapping
    private ResponseEntity<List<SubjectResponse>> getAllSubjects() {
        List<SubjectResponse> subjects = subjectMapper.getAll();
        return ResponseEntity.ok(subjects);
    }

    @GetMapping("/{subjectId}")
    private ResponseEntity<SubjectResponse> getSubjectById(@PathVariable("subjectId") Long subjectId) {
        SubjectResponse subject = subjectMapper.getById(subjectId);
        return ResponseEntity.ok(subject);
    }
}

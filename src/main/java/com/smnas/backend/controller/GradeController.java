package com.smnas.backend.controller;

import com.smnas.backend.dto.grade.GradeRequest;
import com.smnas.backend.dto.grade.GradeResponse;
import com.smnas.backend.mapper.GradeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/grades")
@RequiredArgsConstructor
public class GradeController {

    private final GradeMapper gradeMapper;

    @PostMapping
    private ResponseEntity<GradeResponse> create(@Valid @RequestBody GradeRequest gradeRequest) {
        GradeResponse grade = gradeMapper.create(gradeRequest);
        return ResponseEntity.ok(grade);
    }

    @PutMapping
    private ResponseEntity<GradeResponse> update(@Valid @RequestBody GradeRequest gradeRequest) {
        GradeResponse grade = gradeMapper.update(gradeRequest);
        return ResponseEntity.ok(grade);
    }
}

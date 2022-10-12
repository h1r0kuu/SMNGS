package com.smnas.backend.controller;

import com.smnas.backend.dto.grade.GradeRequest;
import com.smnas.backend.dto.grade.GradeResponse;
import com.smnas.backend.mapper.GradeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/grades")
@RequiredArgsConstructor
public class GradeController {

    private final GradeMapper gradeMapper;

    @PostMapping
    private ResponseEntity<GradeResponse> create(@RequestBody GradeRequest gradeRequest) {
        GradeResponse grade = gradeMapper.create(gradeRequest);
        return ResponseEntity.ok(grade);
    }

    @PatchMapping("/{gradeId}")
    private ResponseEntity<GradeResponse> update(@PathVariable("gradeId") Long gradeId, @RequestBody GradeRequest gradeRequest) {
        GradeResponse grade = gradeMapper.update(gradeId, gradeRequest);
        return ResponseEntity.ok(grade);
    }
}

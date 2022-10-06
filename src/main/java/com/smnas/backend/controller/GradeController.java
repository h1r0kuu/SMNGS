package com.smnas.backend.controller;

import com.smnas.backend.dto.request.GradeRequest;
import com.smnas.backend.dto.response.GradeResponse;
import com.smnas.backend.mapper.GradeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

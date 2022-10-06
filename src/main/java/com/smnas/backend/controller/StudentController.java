package com.smnas.backend.controller;

import com.smnas.backend.dto.request.StudentRequest;
import com.smnas.backend.dto.response.StudentResponse;
import com.smnas.backend.mapper.StudentMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentMapper studentMapper;

    @GetMapping
    private ResponseEntity<List<StudentResponse>> getAll() {
        List<StudentResponse> students = studentMapper.getAll();
        return ResponseEntity.ok(students);
    }

    @PostMapping
    private ResponseEntity<StudentResponse> create(@RequestBody StudentRequest studentRequest) {
        StudentResponse student = studentMapper.create(studentRequest);
        return ResponseEntity.ok(student);
    }
}

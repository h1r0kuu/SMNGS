package com.smnas.backend.controller;

import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.mapper.StudentMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    private ResponseEntity<StudentResponse> create(@Valid @RequestBody StudentRequest studentRequest) throws UserAlreadyExistException {
        StudentResponse student = studentMapper.create(studentRequest);
        return ResponseEntity.ok(student);
    }
}

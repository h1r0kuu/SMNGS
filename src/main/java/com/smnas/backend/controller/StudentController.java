package com.smnas.backend.controller;

import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.dto.student.StudentUpdateRequest;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.mapper.StudentMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
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

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    private ResponseEntity<StudentResponse> create(@Valid @ModelAttribute StudentRequest studentRequest) throws UserAlreadyExistException, IOException {
        StudentResponse student = studentMapper.create(studentRequest, studentRequest.getProfilePicture());
        return ResponseEntity.ok(student);
    }

    @PutMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    private ResponseEntity<StudentResponse> update(@Valid @ModelAttribute StudentUpdateRequest studentRequest) throws UserAlreadyExistException, IOException {
        System.out.println(studentRequest);
        StudentResponse student = studentMapper.update(studentRequest, studentRequest.getProfilePicture());
        return ResponseEntity.ok(student);
    }

    @GetMapping("/{id}")
    private ResponseEntity<StudentResponse> getOne(@PathVariable("id") Long id) {
        StudentResponse student = studentMapper.getOne(id);
        return ResponseEntity.ok(student);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<String> deleteOne(@PathVariable("id") Long id) {
        studentMapper.delete(id);
        return ResponseEntity.ok("deleted");
    }
}

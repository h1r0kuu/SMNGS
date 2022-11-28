package com.smnas.backend.controller;

import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.dto.teacher.TeacherRequest;
import com.smnas.backend.dto.teacher.TeacherResponse;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.mapper.TeacherMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/api/v1/teachers")
@RequiredArgsConstructor
public class TeacherController {
    private final TeacherMapper teacherMapper;

    @GetMapping
    private ResponseEntity<Page<TeacherResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<TeacherResponse> teachers = teacherMapper.findAll(pageable);
        return ResponseEntity.ok(teachers);
    }

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    private ResponseEntity<TeacherResponse> create(@Valid @ModelAttribute TeacherRequest teacherRequest) throws UserAlreadyExistException, IOException {
        TeacherResponse teacher = teacherMapper.create(teacherRequest, teacherRequest.getProfilePicture());
        return ResponseEntity.ok(teacher);
    }

    @PutMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    private ResponseEntity<TeacherResponse> update(@Valid @ModelAttribute TeacherRequest teacherRequest) throws UserAlreadyExistException, IOException {
        TeacherResponse teacher = teacherMapper.update(teacherRequest, teacherRequest.getProfilePicture());
        return ResponseEntity.ok(teacher);
    }

    @GetMapping("/{id}")
    private ResponseEntity<TeacherResponse> getOne(@PathVariable("id") Long id) {
        TeacherResponse teacher = teacherMapper.findById(id);
        return ResponseEntity.ok(teacher);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<String> deleteOne(@PathVariable("id") Long id) {
        teacherMapper.deleteById(id);
        return ResponseEntity.ok("deleted");
    }

    @GetMapping("/{id}/groups")
    private ResponseEntity<Page<GroupResponse>> getGroups(@PathVariable("id") Long id,
                                                          @PageableDefault Pageable pageable) {
        Page<GroupResponse> groups = teacherMapper.getGroups(id, pageable);
        return ResponseEntity.ok(groups);
    }
}

package com.smnas.backend.mapper;

import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.dto.student.StudentUpdateRequest;
import com.smnas.backend.entity.Student;
import com.smnas.backend.entity.User;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class StudentMapper {

    private final StudentService studentService;
    private final BasicMapper mapper;

    public List<StudentResponse> getAll() {
        return mapper.convertListTo(studentService.findAll(), StudentResponse.class);
    }

    public StudentResponse create(StudentRequest studentRequest, MultipartFile profilePicture) throws UserAlreadyExistException, IOException {
        Student student = mapper.convertTo(studentRequest, Student.class);
        return mapper.convertTo(studentService.create(student, profilePicture), StudentResponse.class);
    }

    public StudentResponse update(StudentUpdateRequest studentRequest, MultipartFile profilePicture) throws UserAlreadyExistException, IOException {
        Student student = mapper.convertTo(studentRequest, Student.class);
        return mapper.convertTo(studentService.update(student), StudentResponse.class);
    }

    public StudentResponse getOne(Long id) {
        return mapper.convertTo(studentService.findById(id), StudentResponse.class);
    }
}

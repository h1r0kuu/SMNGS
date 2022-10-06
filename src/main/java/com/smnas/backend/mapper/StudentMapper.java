package com.smnas.backend.mapper;

import com.smnas.backend.dto.request.StudentRequest;
import com.smnas.backend.dto.response.StudentResponse;
import com.smnas.backend.entity.Student;
import com.smnas.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class StudentMapper {

    private final StudentService studentService;
    private final BasicMapper mapper;

    public List<StudentResponse> getAll() {
        return mapper.convertListTo(studentService.findAll(), StudentResponse.class);
    }

    public StudentResponse create(StudentRequest studentRequest) {
        Student student = mapper.convertTo(studentRequest, Student.class);
        return mapper.convertTo(studentService.create(student), StudentResponse.class);
    }
}

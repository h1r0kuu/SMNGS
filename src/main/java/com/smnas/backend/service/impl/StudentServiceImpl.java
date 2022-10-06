package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Student;
import com.smnas.backend.repository.StudentRepository;
import com.smnas.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    @Override
    public Student create(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }
}

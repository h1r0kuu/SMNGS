package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Student;
import com.smnas.backend.entity.User;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.repository.StudentRepository;
import com.smnas.backend.service.StudentService;
import com.smnas.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final UserService userService;

    @Override
    public Student create(Student student) throws UserAlreadyExistException {
        userService.create(student.getInfo());;
        return studentRepository.save(student);
    }

    @Override
    public Student update(Student student) throws UserAlreadyExistException {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    @Override
    public Student findById(Long id) {
        return studentRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find student with that id"));
    }
}

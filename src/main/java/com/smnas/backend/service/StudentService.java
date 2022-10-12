package com.smnas.backend.service;

import com.smnas.backend.entity.Student;
import com.smnas.backend.exception.UserAlreadyExistException;

import java.util.List;

public interface StudentService {
    Student create(Student student) throws UserAlreadyExistException;
    Student update(Student student) throws UserAlreadyExistException;
    List<Student> findAll();
    Student findById(Long id);
}

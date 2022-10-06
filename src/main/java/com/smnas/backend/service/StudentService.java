package com.smnas.backend.service;

import com.smnas.backend.entity.Student;

import java.util.List;

public interface StudentService {
    Student create(Student student);
    List<Student> findAll();
}

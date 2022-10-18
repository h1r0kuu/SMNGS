package com.smnas.backend.service;

import com.smnas.backend.entity.Student;
import com.smnas.backend.exception.UserAlreadyExistException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StudentService {
    Student create(Student student) throws UserAlreadyExistException;
    Student create(Student student, MultipartFile profilePicture) throws UserAlreadyExistException, IOException;
    Student update(Student student, MultipartFile profilePicture) throws UserAlreadyExistException, IOException;
    Student update(Student student) throws UserAlreadyExistException;
    List<Student> findAll();
    Student findById(Long id);
}

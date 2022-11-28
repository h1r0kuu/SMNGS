package com.smnas.backend.service;

import com.smnas.backend.entity.Student;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StudentService extends BaseInterface<Student> {
    Student create(Student student, MultipartFile profilePicture) throws IOException;
    Student update(Student student, MultipartFile profilePicture) throws IOException;
}

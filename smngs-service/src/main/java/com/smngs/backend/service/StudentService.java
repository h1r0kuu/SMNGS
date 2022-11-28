package com.smngs.backend.service;

import com.smngs.backend.entity.Student;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface StudentService extends BaseInterface<Student> {
    Student create(Student student, MultipartFile profilePicture) throws IOException;
    Student update(Student student, MultipartFile profilePicture) throws IOException;
}

package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Student;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.repository.StudentRepository;
import com.smnas.backend.service.StudentService;
import com.smnas.backend.utils.FileUpload;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    @Value("${user.image.upload.path}")
    private String fileUploadPath;

    @Value("${host}")
    private String host;

    @Override
    public Student create(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Student create(Student student, MultipartFile profilePicture) throws IOException {
        if(profilePicture != null) {
            FileUpload.upload(fileUploadPath, profilePicture.getOriginalFilename(), profilePicture);
            student.setProfilePicture(host + "img/" + profilePicture.getOriginalFilename());
        }
        return create(student);
    }

    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    @Override
    public Page<Student> findAll(Pageable pageable) {
        return studentRepository.findAll(pageable);
    }

    @Override
    public Student findById(Long id) {
        return studentRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find student with that id"));
    }

    @Override
    public void deleteById(Long id) {
        studentRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        studentRepository.deleteAllById(ids);
    }

    @Override
    public Student update(Student student) {
        return create(student);
    }

    @Override
    public Student update(Student student, MultipartFile profilePicture) throws IOException {
        return create(student, profilePicture);
    }
}

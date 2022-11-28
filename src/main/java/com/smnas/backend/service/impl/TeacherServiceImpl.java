package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Teacher;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.repository.TeacherRepository;
import com.smnas.backend.service.TeacherService;
import com.smnas.backend.service.UserService;
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
public class TeacherServiceImpl implements TeacherService {

    @Value("${user.image.upload.path}")
    private String fileUploadPath;
    @Value("${host}")
    private String host;
    private final TeacherRepository teacherRepository;
    private final UserService userService;

    @Override
    public Teacher create(Teacher teacher) throws UserAlreadyExistException {
        return userService.create(teacher);
    }

    @Override
    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    @Override
    public Page<Teacher> findAll(Pageable pageable) {
        return teacherRepository.findAll(pageable);
    }

    @Override
    public Teacher findById(Long id) {
        return teacherRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find teacher with that id"));
    }

    @Override
    public void deleteById(Long id) {
        teacherRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        teacherRepository.deleteAllById(ids);
    }

    @Override
    public Teacher update(Teacher teacher) {
        return create(teacher);
    }

    @Override
    public Teacher create(Teacher teacher, MultipartFile profilePicture) throws IOException, UserAlreadyExistException {
        if(profilePicture != null) {
            FileUpload.upload(fileUploadPath, profilePicture.getOriginalFilename(), profilePicture);
            teacher.setProfilePicture(host + "img/" + profilePicture.getOriginalFilename());
        }
        return create(teacher);
    }

    @Override
    public Teacher update(Teacher teacher, MultipartFile profilePicture) throws IOException, UserAlreadyExistException {
        return create(teacher, profilePicture);
    }

    @Override
    public Page<Group> findGroups(Long id, Pageable pageable) {
        return teacherRepository.findGroup(id, pageable);
    }
}

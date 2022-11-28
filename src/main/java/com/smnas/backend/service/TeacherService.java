package com.smnas.backend.service;

import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Teacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface TeacherService extends BaseInterface<Teacher> {
    Teacher create(Teacher teacher);
    Teacher create(Teacher teacher, MultipartFile profilePicture) throws IOException;
    Teacher update(Teacher teacher, MultipartFile profilePicture) throws IOException;
    Page<Group> findGroups(Long id, Pageable pageable);
}

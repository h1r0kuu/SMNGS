package com.smnas.backend.service;

import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Student;

import java.util.List;

public interface GroupService {

    Group create(Group group);
    List<Group> findAll();
    Group findById(Long id);
    void deleteById(Long id);
    Group addStudent(Long groupId, Student student);
    Group removeStudent(Long groupId, Student student);
}

package com.smnas.backend.service;

import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Student;
import com.smnas.backend.exception.UserAlreadyExistException;

import java.util.List;

public interface GroupService extends BaseInterface<Group> {
    Group addStudent(Long groupId, Long studentId) throws UserAlreadyExistException;
    Group removeStudent(Long groupId, Student student);
}

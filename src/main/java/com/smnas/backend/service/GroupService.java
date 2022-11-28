package com.smnas.backend.service;

import com.smnas.backend.entity.*;
import com.smnas.backend.exception.UserAlreadyExistException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface GroupService extends BaseInterface<Group> {
    List<Schedule> getSchedule(Long groupId);
    Page<Student> getStudents(Long groupId, Pageable pageable);
    Group addStudent(Long groupId, Long studentId) throws UserAlreadyExistException;
    Group removeStudent(Long groupId, Long studentId);
    Group addTeacher(Long groupId, Long teacherId) throws UserAlreadyExistException;
    Group removeTeacher(Long groupId, Long teacherId);
    Group addSubject(Long groupId, Long subjectId) throws UserAlreadyExistException;
    Group removeSubject(Long groupId, Long subjectId);
}

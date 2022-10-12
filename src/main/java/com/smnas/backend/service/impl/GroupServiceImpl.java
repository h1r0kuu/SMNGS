package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Student;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.repository.GroupRepository;
import com.smnas.backend.service.GroupService;
import com.smnas.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class GroupServiceImpl implements GroupService {

    private final GroupRepository groupRepository;
    private final StudentService studentService;

    @Override
    public Group create(Group group) {
        return groupRepository.save(group);
    }

    @Override
    public List<Group> findAll() {
        return groupRepository.findAll();
    }

    @Override
    public Group findById(Long id) {
        return groupRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find group with that id"));
    }

    @Override
    public void deleteById(Long id) {
        groupRepository.deleteById(id);
    }

    @Override
    public Group addStudent(Long groupId, Long studentId) throws UserAlreadyExistException {
        Group group = findById(groupId);
        Student student = studentService.findById(studentId);
        student.setGroup(group);
        studentService.update(student);
        return group;
    }

    @Override
    public Group removeStudent(Long groupId, Student student) {
        Group group = findById(groupId);
        group.getStudents().remove(student);
        return groupRepository.save(group);
    }
}

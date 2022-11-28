package com.smngs.backend.service.impl;

import com.smngs.backend.entity.*;
import com.smngs.backend.exception.UserAlreadyExistException;
import com.smngs.backend.repository.GroupRepository;
import com.smngs.backend.service.GroupService;
import com.smngs.backend.service.GroupSubjectService;
import com.smngs.backend.service.StudentService;
import com.smngs.backend.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class GroupServiceImpl implements GroupService {

    private final GroupRepository groupRepository;
    private final StudentService studentService;
    private final TeacherService teacherService;
    private final GroupSubjectService groupSubjectService;

    @Override
    public Group create(Group group) {
        return groupRepository.save(group);
    }

    @Override
    public List<Group> findAll() {
        return groupRepository.findAll();
    }

    @Override
    public Page<Group> findAll(Pageable pageable) {
        return groupRepository.findAll(pageable);
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
    public void deleteAllById(List<Long> ids) {
        groupRepository.deleteAllById(ids);
    }

    @Override
    public Group update(Group group) {
        return create(group);
    }

    @Override
    public List<Schedule> getSchedule(Long groupId) {
        return groupRepository.findSchedule(groupId);
    }

    @Override
    public Page<Student> getStudents(Long groupId, Pageable pageable) {
        return groupRepository.findStudents(groupId, pageable);
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
    public Group removeStudent(Long groupId, Long studentId) {
        Group group = findById(groupId);
        Student student = studentService.findById(studentId);
        group.getStudents().remove(student);
        return update(group);
    }

    @Override
    public Group addTeacher(Long groupId, Long teacherId) throws UserAlreadyExistException {
        Group group = findById(groupId);
        Teacher teacher = teacherService.findById(teacherId);
        group.getTeachers().add(teacher);
        return update(group);
    }

    @Override
    public Group removeTeacher(Long groupId, Long teacherId) {
        Group group = findById(groupId);
        Teacher teacher = teacherService.findById(teacherId);
        group.getTeachers().remove(teacher);
        return update(group);
    }

    @Override
    public Group addSubject(Long groupId, Long subjectId) throws UserAlreadyExistException {
        Group group = findById(groupId);
        GroupSubject subject = groupSubjectService.findById(subjectId);
        group.getGroupSubjects().add(subject);
        return update(group);
    }

    @Override
    public Group removeSubject(Long groupId, Long subjectId) {
        Group group = findById(groupId);
        GroupSubject subject = groupSubjectService.findById(subjectId);
        group.getGroupSubjects().remove(subject);
        return update(group);
    }
}

package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Subject;
import com.smnas.backend.entity.Teacher;
import com.smnas.backend.entity.User;
import com.smnas.backend.enums.UserRole;
import com.smnas.backend.exception.BadRoleException;
import com.smnas.backend.repository.SubjectRepository;
import com.smnas.backend.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;

    @Override
    public Subject create(Subject subject) {
        return subjectRepository.save(subject);
    }

    @Override
    public List<Subject> findAll() {
        return subjectRepository.findAll();
    }

    @Override
    public Page<Subject> findAll(Pageable pageable) {
        return subjectRepository.findAll(pageable);
    }

    @Override
    public Subject findById(Long id) {
        return subjectRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find grade with that id"));
    }

    @Override
    public void deleteById(Long id) {
        subjectRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        subjectRepository.deleteAllById(ids);
    }

    @Override
    public Subject update(Subject subject) {
        return create(subject);
    }

    @Override
    public Subject addTeacher(Long subjectId, Teacher teacher) {
        if(!teacher.getRole().equals(UserRole.TEACHER)) {
            throw new BadRoleException("Bad user role");
        }
        Subject subject = findById(subjectId);
//        subject.getTeachers().add(teacher);
        return update(subject);
    }

    @Override
    public Subject removeTeacher(Long subjectId, Teacher teacher) {
        Subject subject = findById(subjectId);
//        subject.getTeachers().add(teacher);
        return update(subject);
    }
}

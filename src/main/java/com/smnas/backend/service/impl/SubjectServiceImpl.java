package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Subject;
import com.smnas.backend.entity.User;
import com.smnas.backend.enums.UserRole;
import com.smnas.backend.exception.BadRoleException;
import com.smnas.backend.repository.SubjectRepository;
import com.smnas.backend.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;

    @Override
    public List<Subject> getAll() {
        return subjectRepository.findAll();
    }

    @Override
    public Subject create(Subject subject) {
        return subjectRepository.save(subject);
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
    public Subject changeById(Long id, Subject newInfo) {
        Subject subject = findById(id);
        subject.setSubjectName(newInfo.getSubjectName());
        return subjectRepository.save(subject);
    }

    @Override
    public Subject addStudent(Long subjectId, User user) {
        if(!user.getRole().equals(UserRole.TEACHER)) {
            throw new BadRoleException("Bad user role");
        }
        Subject subject = findById(subjectId);
        subject.getTeachers().add(user);
        return subjectRepository.save(subject);
    }

    @Override
    public Subject removeStudent(Long subjectId, User user) {
        Subject subject = findById(subjectId);
        subject.getTeachers().add(user);
        return subjectRepository.save(subject);
    }
}

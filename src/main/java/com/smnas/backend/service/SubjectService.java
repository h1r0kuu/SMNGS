package com.smnas.backend.service;

import com.smnas.backend.entity.Subject;
import com.smnas.backend.entity.User;

import java.util.List;

public interface SubjectService {

    List<Subject> getAll();
    Subject create(Subject subject);

    Subject findById(Long id);
    
    void deleteById(Long id);
    Subject changeById(Long id, Subject newInfo);
    Subject addStudent(Long subjectId, User user);
    Subject removeStudent(Long subjectId, User user);
}

package com.smnas.backend.service;

import com.smnas.backend.entity.Subject;

import java.util.List;

public interface SubjectService {

    List<Subject> getAll();
    Subject create(Subject subject);

    Subject findById(Long id);
    
    void deleteById(Long id);
    Subject changeById(Long id, Subject newInfo);
}

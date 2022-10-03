package com.smnas.backend.service;

import com.smnas.backend.entity.Subject;

import java.util.List;

public interface SubjectService {

    List<Subject> getAll();

    Subject findById(Long id);
}

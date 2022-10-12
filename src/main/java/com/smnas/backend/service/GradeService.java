package com.smnas.backend.service;

import com.smnas.backend.entity.Grade;

public interface GradeService {
    Grade create(Grade grade);
    Grade findById(Long gradeId);
}

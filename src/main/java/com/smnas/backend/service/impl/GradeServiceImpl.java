package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Grade;
import com.smnas.backend.repository.GradeRepository;
import com.smnas.backend.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {

    private final GradeRepository gradeRepository;

    @Override
    public Grade create(Grade grade) {
        return gradeRepository.save(grade);
    }
}

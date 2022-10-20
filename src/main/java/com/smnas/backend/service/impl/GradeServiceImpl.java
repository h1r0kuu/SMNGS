package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Grade;
import com.smnas.backend.repository.GradeRepository;
import com.smnas.backend.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {

    private final GradeRepository gradeRepository;

    @Override
    public Grade create(Grade grade) {
        return gradeRepository.save(grade);
    }

    @Override
    public List<Grade> findAll() {
        return gradeRepository.findAll();
    }

    @Override
    public Grade findById(Long id) {
        return gradeRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find grade with that id"));
    }

    @Override
    public void deleteById(Long id) {
        gradeRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        gradeRepository.deleteAllById(ids);
    }

    @Override
    public Grade update(Grade grade) {
        return create(grade);
    }
}

package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Subject;
import com.smnas.backend.repository.SubjectRepository;
import com.smnas.backend.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return subjectRepository.findById(id).orElseThrow(null);
    }

    @Override
    public void deleteById(Long id) {
        subjectRepository.deleteById(id);
    }

    @Override
    public Subject changeById(Long id, Subject newInfo) {
        Subject subject = subjectRepository.findById(id).orElseThrow(null);
        subject.setSubjectName(newInfo.getSubjectName());
        return subjectRepository.save(subject);
    }
}

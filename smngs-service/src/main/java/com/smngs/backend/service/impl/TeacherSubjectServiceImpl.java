package com.smngs.backend.service.impl;

import com.smngs.backend.entity.TeacherSubject;
import com.smngs.backend.repository.TeacherSubjectRepository;
import com.smngs.backend.service.TeacherSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class TeacherSubjectServiceImpl implements TeacherSubjectService {

    private final TeacherSubjectRepository teacherSubjectRepository;

    @Override
    public TeacherSubject create(TeacherSubject teacherSubject) {
        return teacherSubjectRepository.save(teacherSubject);
    }

    @Override
    public List<TeacherSubject> findAll() {
        return teacherSubjectRepository.findAll();
    }

    @Override
    public Page<TeacherSubject> findAll(Pageable pageable) {
        return teacherSubjectRepository.findAll(pageable);
    }

    @Override
    public TeacherSubject findById(Long id) {
        return teacherSubjectRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find teacher subject with that id"));
    }

    @Override
    public void deleteById(Long id) {
        teacherSubjectRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        teacherSubjectRepository.deleteAllById(ids);
    }

    @Override
    public TeacherSubject update(TeacherSubject teacherSubject) {
        return create(teacherSubject);
    }

    @Override
    public TeacherSubject findBySubjectIdAndTeacherId(Long subjectId, Long teacherId) {
        return teacherSubjectRepository.findBySubjectIdAndTeacherId(subjectId, teacherId);
    }
}

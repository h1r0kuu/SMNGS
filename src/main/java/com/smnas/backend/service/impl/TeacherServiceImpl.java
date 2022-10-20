package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Teacher;
import com.smnas.backend.repository.TeacherRepository;
import com.smnas.backend.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepository;

    @Override
    public Teacher create(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    @Override
    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    @Override
    public Teacher findById(Long id) {
        return teacherRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find grade with that id"));
    }

    @Override
    public void deleteById(Long id) {
        teacherRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        teacherRepository.deleteAllById(ids);
    }

    @Override
    public Teacher update(Teacher teacher) {
        return create(teacher);
    }
}

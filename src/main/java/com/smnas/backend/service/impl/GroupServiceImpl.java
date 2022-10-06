package com.smnas.backend.service.impl;

import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Student;
import com.smnas.backend.repository.GroupRepository;
import com.smnas.backend.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupServiceImpl implements GroupService {

    private final GroupRepository groupRepository;

    @Override
    public Group create(Group group) {
        return groupRepository.save(group);
    }

    @Override
    public List<Group> findAll() {
        return groupRepository.findAll();
    }

    @Override
    public Group findById(Long id) {
        return groupRepository.findById(id).orElseThrow(null);
    }

    @Override
    public void deleteById(Long id) {
        groupRepository.deleteById(id);
    }

    @Override
    public Group addStudent(Long groupId, Student student) {
        Group group = findById(groupId);
        group.getStudents().add(student);
        return groupRepository.save(group);
    }

    @Override
    public Group removeStudent(Long groupId, Student student) {
        Group group = findById(groupId);
        group.getStudents().remove(student);
        return groupRepository.save(group);
    }
}

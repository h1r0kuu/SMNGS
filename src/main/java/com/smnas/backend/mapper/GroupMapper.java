package com.smnas.backend.mapper;

import com.smnas.backend.dto.request.GroupRequest;
import com.smnas.backend.dto.request.StudentRequest;
import com.smnas.backend.dto.response.GroupResponse;
import com.smnas.backend.dto.response.StudentResponse;
import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Student;
import com.smnas.backend.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class GroupMapper {

    private final GroupService groupService;
    private final BasicMapper mapper;

    public List<GroupResponse> getAll() {
        return groupService.findAll().stream()
                .map(g -> mapper.convertTo(g, GroupResponse.class))
                .collect(Collectors.toList());
    }

    public GroupResponse create(GroupRequest groupRequest) {
        Group group = groupService.create(mapper.convertTo(groupRequest, Group.class));
        return mapper.convertTo(groupService.create(group), GroupResponse.class);
    }

    public GroupResponse getById(Long id) {
        return mapper.convertTo(groupService.findById(id), GroupResponse.class);
    }

    public void deleteById(Long id) {
        groupService.deleteById(id);
    }

    public List<StudentResponse> getStudents(Long groupId) {
        return mapper.convertListTo(groupService.findById(groupId).getStudents(), StudentResponse.class);
    }

    public GroupResponse addStudent(Long groupId, StudentRequest studentRequest) {
        Student student = mapper.convertTo(studentRequest, Student.class);
        return mapper.convertTo(groupService.addStudent(groupId, student), GroupResponse.class);
    }

    public GroupResponse removeStudent(Long groupId, StudentRequest studentRequest) {
        Student student = mapper.convertTo(studentRequest, Student.class);
        return mapper.convertTo(groupService.removeStudent(groupId, student), GroupResponse.class);
    }
}

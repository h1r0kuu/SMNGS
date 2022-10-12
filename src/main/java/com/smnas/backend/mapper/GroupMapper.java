package com.smnas.backend.mapper;

import com.smnas.backend.dto.group.GroupAddStudentRequest;
import com.smnas.backend.dto.group.GroupRequest;
import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Student;
import com.smnas.backend.exception.UserAlreadyExistException;
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

    public GroupResponse addStudent(Long groupId, GroupAddStudentRequest studentRequest) throws UserAlreadyExistException {
        return mapper.convertTo(groupService.addStudent(groupId, studentRequest.getStudentId()), GroupResponse.class);
    }

    public GroupResponse removeStudent(Long groupId, StudentRequest studentRequest) {
        Student student = mapper.convertTo(studentRequest, Student.class);
        return mapper.convertTo(groupService.removeStudent(groupId, student), GroupResponse.class);
    }
}

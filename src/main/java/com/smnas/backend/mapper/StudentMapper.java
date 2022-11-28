package com.smnas.backend.mapper;

import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.dto.student.StudentUpdateRequest;
import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Student;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.service.GroupService;
import com.smnas.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.PropertyMap;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class StudentMapper implements MapperInterface<StudentRequest, StudentResponse> {

    private final StudentService studentService;
    private final GroupService groupService;
    private final BasicMapper mapper;

    @Override
    public StudentResponse create(StudentRequest studentRequest) {
        Student student = mapper.convertTo(studentRequest, Student.class);
        return mapper.convertTo(studentService.create(student), StudentResponse.class);
    }

    public StudentResponse create(StudentRequest studentRequest, MultipartFile profilePicture) throws UserAlreadyExistException, IOException {
        PropertyMap<StudentUpdateRequest, Student> clientPropertyMap = new PropertyMap<StudentUpdateRequest, Student>() {
            @Override
            protected void configure() {
                skip(destination.getProfilePicture());
            }
        };
        Student student = mapper.convertTo(studentRequest, Student.class);
        return mapper.convertTo(studentService.create(student, profilePicture), StudentResponse.class);
    }

    @Override
    public List<StudentResponse> findAll() {
        return mapper.convertListTo(studentService.findAll(), StudentResponse.class);
    }

    @Override
    public Page<StudentResponse> findAll(Pageable pageable) {
        return studentService.findAll(pageable).map(s -> mapper.convertTo(s, StudentResponse.class));
    }

    @Override
    public StudentResponse findById(Long id) {
        return mapper.convertTo(studentService.findById(id), StudentResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        studentService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        studentService.deleteAllById(ids);
    }

    @Override
    public StudentResponse update(StudentRequest studentRequest) {
        Student student = studentService.update(mapper.convertTo(studentRequest, Student.class));
        return mapper.convertTo(student, StudentResponse.class);
    }

    public StudentResponse update(StudentRequest studentRequest, MultipartFile profilePicture) throws UserAlreadyExistException, IOException {
        //PropertyMap<StudentRequest, Student> clientPropertyMap = new PropertyMap<StudentRequest, Student>() {
        //    @Override
        //    protected void configure() {
        //        skip(destination.getProfilePicture());
        //    }
        //};
        Group group = groupService.findById(studentRequest.getGroupId());
        Student student = mapper.convertTo(studentRequest, Student.class);
        student.setGroup(group);
        return mapper.convertTo(studentService.update(student, profilePicture), StudentResponse.class);
    }
}

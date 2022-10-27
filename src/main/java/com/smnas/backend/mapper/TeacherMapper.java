package com.smnas.backend.mapper;

import com.smnas.backend.dto.student.StudentRequest;
import com.smnas.backend.dto.student.StudentResponse;
import com.smnas.backend.dto.student.StudentUpdateRequest;
import com.smnas.backend.dto.subject.SubjectResponse;
import com.smnas.backend.dto.teacher.TeacherRequest;
import com.smnas.backend.dto.teacher.TeacherResponse;
import com.smnas.backend.entity.Student;
import com.smnas.backend.entity.Subject;
import com.smnas.backend.entity.Teacher;
import com.smnas.backend.exception.UserAlreadyExistException;
import com.smnas.backend.service.TeacherService;
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
public class TeacherMapper implements MapperInterface<TeacherRequest, TeacherResponse> {

    private final TeacherService teacherService;
    private final BasicMapper mapper;

    @Override
    public TeacherResponse create(TeacherRequest teacherRequest) {
        Teacher teacher = teacherService.create(mapper.convertTo(teacherRequest, Teacher.class));
        return mapper.convertTo(teacher, TeacherResponse.class);
    }

    public TeacherResponse create(TeacherRequest teacherRequest, MultipartFile profilePicture) throws UserAlreadyExistException, IOException {
        PropertyMap<TeacherRequest, Teacher> clientPropertyMap = new PropertyMap<TeacherRequest, Teacher>() {
            @Override
            protected void configure() {
                skip(destination.getProfilePicture());
            }
        };

        Teacher teacher = mapper.convertTo(teacherRequest, Teacher.class, clientPropertyMap);
        return mapper.convertTo(teacherService.create(teacher, profilePicture), TeacherResponse.class);
    }

    @Override
    public List<TeacherResponse> findAll() {
        return mapper.convertListTo(teacherService.findAll(), TeacherResponse.class);
    }

    @Override
    public Page<TeacherResponse> findAll(Pageable pageable) {
        return teacherService.findAll(pageable).map(t -> mapper.convertTo(t, TeacherResponse.class));
    }

    @Override
    public TeacherResponse findById(Long id) {
        return mapper.convertTo(teacherService.findById(id), TeacherResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        teacherService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        teacherService.deleteAllById(ids);
    }

    @Override
    public TeacherResponse update(TeacherRequest teacherRequest) {
        Teacher teacher = teacherService.update(mapper.convertTo(teacherRequest, Teacher.class));
        return mapper.convertTo(teacher, TeacherResponse.class);
    }

    public TeacherResponse update(TeacherRequest teacherRequest, MultipartFile profilePicture) throws UserAlreadyExistException, IOException {
        PropertyMap<TeacherRequest, Teacher> clientPropertyMap = new PropertyMap<TeacherRequest, Teacher>() {
            @Override
            protected void configure() {
                skip(destination.getProfilePicture());
            }
        };
        Teacher teacher = mapper.convertTo(teacherRequest, Teacher.class, clientPropertyMap);
        return mapper.convertTo(teacherService.update(teacher, profilePicture), TeacherResponse.class);
    }

}

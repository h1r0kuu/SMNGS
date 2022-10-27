package com.smnas.backend.mapper;

import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.dto.subject.SubjectRequest;
import com.smnas.backend.dto.teacher.TeacherRequest;
import com.smnas.backend.dto.user.UserRequest;
import com.smnas.backend.dto.subject.SubjectResponse;
import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Subject;
import com.smnas.backend.entity.Teacher;
import com.smnas.backend.entity.User;
import com.smnas.backend.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class SubjectMapper implements MapperInterface<SubjectRequest, SubjectResponse> {

    private final SubjectService subjectService;
    private final BasicMapper mapper;

    @Override
    public SubjectResponse create(SubjectRequest subjectRequest) {
        Subject subject = subjectService.create(mapper.convertTo(subjectRequest, Subject.class));
        return mapper.convertTo(subject, SubjectResponse.class);
    }

    @Override
    public List<SubjectResponse> findAll() {
        return mapper.convertListTo(subjectService.findAll(), SubjectResponse.class);
    }

    @Override
    public Page<SubjectResponse> findAll(Pageable pageable) {
        return subjectService.findAll(pageable).map(s -> mapper.convertTo(s, SubjectResponse.class));
    }

    @Override
    public SubjectResponse findById(Long id) {
        return mapper.convertTo(subjectService.findById(id), SubjectResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        subjectService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        subjectService.deleteAllById(ids);
    }

    @Override
    public SubjectResponse update(SubjectRequest subjectRequest) {
        Subject subject = subjectService.update(mapper.convertTo(subjectRequest, Subject.class));
        return mapper.convertTo(subject, SubjectResponse.class);
    }

    public SubjectResponse changeById(Long id,  SubjectRequest subjectRequest) {
        Subject subject = mapper.convertTo(subjectRequest, Subject.class);
        return mapper.convertTo(subjectService.update(subject), SubjectResponse.class);
    }

    public SubjectResponse addTeacher(Long subjectId, TeacherRequest teacherRequest) {
        Teacher teacher = mapper.convertTo(teacherRequest, Teacher.class);
        return mapper.convertTo(subjectService.addTeacher(subjectId, teacher), SubjectResponse.class);
    }

    public SubjectResponse removeTeacher(Long subjectId, TeacherRequest teacherRequest) {
        Teacher teacher = mapper.convertTo(teacherRequest, Teacher.class);
        return mapper.convertTo(subjectService.removeTeacher(subjectId, teacher), SubjectResponse.class);
    }
}

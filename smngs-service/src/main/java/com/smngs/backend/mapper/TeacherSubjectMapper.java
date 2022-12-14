package com.smngs.backend.mapper;

import com.smngs.backend.dto.teachersubject.TeacherSubjectRequest;
import com.smngs.backend.dto.teachersubject.TeacherSubjectResponse;
import com.smngs.backend.entity.Subject;
import com.smngs.backend.entity.Teacher;
import com.smngs.backend.entity.TeacherSubject;
import com.smngs.backend.exception.TeacherSubjectAlreadyExistException;
import com.smngs.backend.service.SubjectService;
import com.smngs.backend.service.TeacherService;
import com.smngs.backend.service.TeacherSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class TeacherSubjectMapper implements MapperInterface<TeacherSubjectRequest, TeacherSubjectResponse> {

    private final BasicMapper mapper;

    private final TeacherSubjectService teacherSubjectService;
    private final TeacherService teacherService;
    private final SubjectService subjectService;

    @Override
    public TeacherSubjectResponse create(TeacherSubjectRequest teacherSubjectRequest) {
        TeacherSubject teacherSubject = new TeacherSubject();
        if(teacherSubjectService.findBySubjectIdAndTeacherId(teacherSubjectRequest.getSubjectId(), teacherSubjectRequest.getTeacherId()) != null) {
            throw new TeacherSubjectAlreadyExistException("Teacher subject already exist");
        }
        Subject subject = subjectService.findById(teacherSubjectRequest.getSubjectId());
        Teacher teacher = teacherService.findById(teacherSubjectRequest.getTeacherId());
        teacherSubject.setSubject(subject);
        teacherSubject.setTeacher(teacher);
        return mapper.convertTo(teacherSubjectService.create(teacherSubject), TeacherSubjectResponse.class);
    }

    @Override
    public List<TeacherSubjectResponse> findAll() {
        return mapper.convertListTo(teacherSubjectService.findAll(), TeacherSubjectResponse.class);
    }

    @Override
    public Page<TeacherSubjectResponse> findAll(Pageable pageable) {
        return teacherSubjectService.findAll(pageable).map(ts -> mapper.convertTo(ts, TeacherSubjectResponse.class));
    }

    @Override
    public TeacherSubjectResponse findById(Long id) {
        return mapper.convertTo(teacherSubjectService.findById(id), TeacherSubjectResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        teacherSubjectService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        teacherSubjectService.deleteAllById(ids);
    }

    @Override
    public TeacherSubjectResponse update(TeacherSubjectRequest teacherSubjectRequest) {
        return create(teacherSubjectRequest);
    }
}

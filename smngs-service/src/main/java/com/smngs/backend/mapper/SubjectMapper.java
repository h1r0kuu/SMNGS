package com.smngs.backend.mapper;

import com.smngs.backend.dto.subject.SubjectRequest;
import com.smngs.backend.dto.teacher.TeacherRequest;
import com.smngs.backend.dto.subject.SubjectResponse;
import com.smngs.backend.service.SubjectService;
import com.smngs.backend.service.TeacherService;
import com.smngs.backend.service.TeacherSubjectService;
import com.smngs.backend.entity.Subject;
import com.smngs.backend.entity.Teacher;
import com.smngs.backend.entity.TeacherSubject;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class SubjectMapper implements MapperInterface<SubjectRequest, SubjectResponse> {

    private final SubjectService subjectService;
    private final TeacherSubjectService teacherSubjectService;
    private final TeacherService teacherService;
    private final BasicMapper mapper;

    @Override
    public SubjectResponse create(SubjectRequest subjectRequest) {
        Subject subject = subjectService.create(mapper.convertTo(subjectRequest, Subject.class));
        System.out.println(subjectRequest.getTeacherIds());
        if(!subjectRequest.getTeacherIds().isEmpty()) {
            for(Long teacherId : subjectRequest.getTeacherIds()) {
                TeacherSubject teacherSubject = new TeacherSubject();
                teacherSubject.setSubject(subject);
                Teacher teacher = teacherService.findById(teacherId);
                if(teacher != null) {
                    teacherSubject.setTeacher(teacher);
                    teacherSubjectService.create(teacherSubject);
                }
            }
        }
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

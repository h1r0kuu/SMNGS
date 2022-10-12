package com.smnas.backend.mapper;

import com.smnas.backend.dto.subject.SubjectRequest;
import com.smnas.backend.dto.user.UserRequest;
import com.smnas.backend.dto.subject.SubjectResponse;
import com.smnas.backend.entity.Subject;
import com.smnas.backend.entity.User;
import com.smnas.backend.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class SubjectMapper {

    private final SubjectService subjectService;
    private final BasicMapper mapper;

    public List<SubjectResponse> getAll() {
        return mapper.convertListTo(subjectService.getAll(), SubjectResponse.class);
    }

    public SubjectResponse create(SubjectRequest subjectRequest) {
        Subject subject = mapper.convertTo(subjectRequest, Subject.class);
        return mapper.convertTo(subjectService.create(subject), SubjectResponse.class);
    }

    public SubjectResponse getById(Long id) {
        return mapper.convertTo(subjectService.findById(id), SubjectResponse.class);
    }

    public void deleteById(Long id) {
        subjectService.deleteById(id);
    }

    public SubjectResponse changeById(Long id,  SubjectRequest subjectRequest) {
        Subject subject = mapper.convertTo(subjectRequest, Subject.class);
        return mapper.convertTo(subjectService.changeById(id, subject), SubjectResponse.class);
    }

    public SubjectResponse addTeacher(Long subjectId, UserRequest userRequest) {
        User user = mapper.convertTo(userRequest, User.class);
        return mapper.convertTo(subjectService.addStudent(subjectId, user), SubjectResponse.class);
    }

    public SubjectResponse removeTeacher(Long subjectId, UserRequest userRequest) {
        User user = mapper.convertTo(userRequest, User.class);
        return mapper.convertTo(subjectService.removeStudent(subjectId, user), SubjectResponse.class);
    }
}

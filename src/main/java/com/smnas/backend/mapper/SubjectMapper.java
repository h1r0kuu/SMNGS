package com.smnas.backend.mapper;

import com.smnas.backend.dto.response.SubjectResponse;
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

    public SubjectResponse getById(Long id) {
        return mapper.convertTo(subjectService.findById(id), SubjectResponse.class);
    }
}

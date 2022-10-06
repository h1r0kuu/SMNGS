package com.smnas.backend.mapper;

import com.smnas.backend.dto.request.GradeRequest;
import com.smnas.backend.dto.response.GradeResponse;
import com.smnas.backend.entity.Grade;
import com.smnas.backend.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class GradeMapper {

    private final BasicMapper mapper;
    private final GradeService gradeService;

    public GradeResponse create(GradeRequest gradeRequest) {
        Grade grade = gradeService.create(mapper.convertTo(gradeRequest, Grade.class));
        return mapper.convertTo(gradeService.create(grade), GradeResponse.class);
    }
}

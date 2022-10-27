package com.smnas.backend.mapper;

import com.smnas.backend.dto.grade.GradeRequest;
import com.smnas.backend.dto.grade.GradeResponse;
import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.entity.Grade;
import com.smnas.backend.entity.Student;
import com.smnas.backend.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class GradeMapper implements MapperInterface<GradeRequest, GradeResponse> {

    private final BasicMapper mapper;
    private final GradeService gradeService;


    @Override
    public GradeResponse create(GradeRequest gradeRequest) {
        Grade grade = gradeService.create(mapper.convertTo(gradeRequest, Grade.class));
        return mapper.convertTo(grade, GradeResponse.class);
    }

    @Override
    public List<GradeResponse> findAll() {
        return mapper.convertListTo(gradeService.findAll(), GradeResponse.class);
    }

    @Override
    public Page<GradeResponse> findAll(Pageable pageable) {
        return gradeService.findAll(pageable).map(g -> mapper.convertTo(g, GradeResponse.class));
    }

    @Override
    public GradeResponse findById(Long id) {
        return mapper.convertTo(gradeService.findById(id), GradeResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        gradeService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        gradeService.deleteAllById(ids);
    }

    @Override
    public GradeResponse update(GradeRequest gradeRequest) {
        Grade grade = gradeService.update(mapper.convertTo(gradeRequest, Grade.class));
        return mapper.convertTo(grade, GradeResponse.class);
    }

}

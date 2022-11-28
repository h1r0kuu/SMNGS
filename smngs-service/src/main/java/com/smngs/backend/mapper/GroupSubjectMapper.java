package com.smngs.backend.mapper;

import com.smngs.backend.dto.groupsubject.GroupSubjectRequest;
import com.smngs.backend.dto.groupsubject.GroupSubjectResponse;
import com.smngs.backend.entity.GroupSubject;
import com.smngs.backend.service.GroupSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class GroupSubjectMapper implements MapperInterface<GroupSubjectRequest, GroupSubjectResponse> {

    private final GroupSubjectService groupSubjectService;
    private final BasicMapper mapper;

    @Override
    public GroupSubjectResponse create(GroupSubjectRequest groupSubjectRequest) {
        GroupSubject groupSubject = groupSubjectService.create(mapper.convertTo(groupSubjectRequest, GroupSubject.class));
        return mapper.convertTo(groupSubject, GroupSubjectResponse.class);
    }

    @Override
    public List<GroupSubjectResponse> findAll() {
        return mapper.convertListTo(groupSubjectService.findAll(), GroupSubjectResponse.class);
    }

    @Override
    public Page<GroupSubjectResponse> findAll(Pageable pageable) {
        return groupSubjectService.findAll(pageable).map(g -> mapper.convertTo(g, GroupSubjectResponse.class));
    }

    @Override
    public GroupSubjectResponse findById(Long id) {
        return mapper.convertTo(groupSubjectService.findById(id), GroupSubjectResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        groupSubjectService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        groupSubjectService.deleteAllById(ids);
    }

    @Override
    public GroupSubjectResponse update(GroupSubjectRequest groupSubjectRequest) {
        GroupSubject groupSubject = groupSubjectService.update(mapper.convertTo(groupSubjectRequest, GroupSubject.class));
        return mapper.convertTo(groupSubject, GroupSubjectResponse.class);
    }
}

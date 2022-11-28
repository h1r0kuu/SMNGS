package com.smngs.backend.service.impl;

import com.smngs.backend.entity.GroupSubject;
import com.smngs.backend.repository.GroupSubjectRepository;
import com.smngs.backend.service.GroupSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupSubjectServiceImpl implements GroupSubjectService {

    private final GroupSubjectRepository groupSubjectRepository;

    @Override
    public GroupSubject create(GroupSubject groupSubject) {
        return groupSubjectRepository.save(groupSubject);
    }

    @Override
    public List<GroupSubject> findAll() {
        return groupSubjectRepository.findAll();
    }

    @Override
    public Page<GroupSubject> findAll(Pageable pageable) {
        return groupSubjectRepository.findAll(pageable);
    }

    @Override
    public GroupSubject findById(Long id) {
        return groupSubjectRepository.findById(id).orElseThrow(() -> new NotFoundException("Cannot found group subject with that id"));
    }

    @Override
    public void deleteById(Long id) {
        groupSubjectRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        groupSubjectRepository.deleteAllById(ids);
    }

    @Override
    public GroupSubject update(GroupSubject groupSubject) {
        return create(groupSubject);
    }
}

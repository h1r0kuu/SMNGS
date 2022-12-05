package com.smngs.library.service.impl;

import com.smngs.library.entity.Publisher;
import com.smngs.library.repository.PublisherRepository;
import com.smngs.library.service.PublisherService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class PublisherServiceImpl implements PublisherService {

    private final PublisherRepository publisherRepository;

    @Override
    public Publisher create(Publisher publisher) {
        return publisherRepository.save(publisher);
    }

    @Override
    public List<Publisher> findAll() {
        return publisherRepository.findAll();
    }

    @Override
    public Page<Publisher> findAll(Pageable pageable) {
        return publisherRepository.findAll(pageable);
    }

    @Override
    public Publisher findById(Long id) {
        return publisherRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find publisher with that id"));
    }

    @Override
    public void deleteById(Long id) {
        publisherRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        publisherRepository.deleteAllById(ids);
    }

    @Override
    public Publisher update(Publisher publisher) {
        return create(publisher);
    }
}

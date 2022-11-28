package com.smnas.backend.mapper;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MapperInterface<T, S> {
    S create(T t);
    List<S> findAll();
    Page<S> findAll(Pageable pageable);
    S findById(Long id);
    void deleteById(Long id);
    void deleteAllById(List<Long> ids);
    S update(T t);
}

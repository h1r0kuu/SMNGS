package com.smnas.backend.service;

import com.smnas.backend.exception.UserAlreadyExistException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BaseInterface<T> {
    T create(T t);
    List<T> findAll();
    Page<T> findAll(Pageable pageable);
    T findById(Long id);
    void deleteById(Long id);
    void deleteAllById(List<Long> ids);
    T update(T t);

}

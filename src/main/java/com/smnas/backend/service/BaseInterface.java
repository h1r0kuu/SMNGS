package com.smnas.backend.service;

import java.util.List;

public interface BaseInterface<T> {
    T create(T t);
    List<T> findAll();
    T findById(Long id);
    void deleteById(Long id);
    void deleteAllById(List<Long> ids);
    T update(T t);

}

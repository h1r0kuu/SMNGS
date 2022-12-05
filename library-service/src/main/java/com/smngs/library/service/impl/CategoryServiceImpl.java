package com.smngs.library.service.impl;

import com.smngs.library.entity.Category;
import com.smngs.library.repository.CategoryRepository;
import com.smngs.library.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public Category create(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Page<Category> findAll(Pageable pageable) {
        return categoryRepository.findAll(pageable);
    }

    @Override
    public Category findById(Long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find category with that id"));
    }

    @Override
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        categoryRepository.deleteAllById(ids);
    }

    @Override
    public Category update(Category category) {
        return create(category);
    }
}

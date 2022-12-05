package com.smngs.library.controller;

import com.smngs.library.dto.category.CategoryRequest;
import com.smngs.library.dto.category.CategoryResponse;
import com.smngs.library.mapper.CategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryMapper categoryMapper;

    @PostMapping
    private ResponseEntity<CategoryResponse> create(@Valid @RequestBody CategoryRequest categoryRequest) {
        CategoryResponse category = categoryMapper.create(categoryRequest);
        return ResponseEntity.ok(category);
    }

//    @PutMapping
//    private ResponseEntity<CategoryResponse> update(@Valid @RequestBody categoryUpdateRequest categoryUpdateRequest) {
//        CategoryResponse category = categoryMapper.update(categoryUpdateRequest);
//        return ResponseEntity.ok(category);
//    }

    @GetMapping("/{categoryId}")
    private ResponseEntity<CategoryResponse> getById(@PathVariable("categoryId") Long categoryId) {
        return ResponseEntity.ok(categoryMapper.findById(categoryId));
    }

    @DeleteMapping("/{categoryId}")
    private ResponseEntity<String> deleteById(@PathVariable("categoryId") Long categoryId) {
        categoryMapper.deleteById(categoryId);
        return ResponseEntity.ok("Category deleted");
    }

    @GetMapping
    private ResponseEntity<Page<CategoryResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<CategoryResponse> categories = categoryMapper.findAll(pageable);
        return ResponseEntity.ok(categories);
    }
}

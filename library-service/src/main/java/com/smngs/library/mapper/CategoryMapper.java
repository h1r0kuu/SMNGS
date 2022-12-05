package com.smngs.library.mapper;

import com.smngs.library.dto.category.CategoryRequest;
import com.smngs.library.dto.category.CategoryResponse;
import com.smngs.library.entity.Category;
import com.smngs.library.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CategoryMapper implements MapperInterface<CategoryRequest, CategoryResponse> {

    private final BasicMapper mapper;
    private final CategoryService categoryService;

    @Override
    public CategoryResponse create(CategoryRequest categoryRequest) {
        Category category = categoryService.create(mapper.convertTo(categoryRequest, Category.class));
        return mapper.convertTo(category, CategoryResponse.class);
    }

    @Override
    public List<CategoryResponse> findAll() {
        return mapper.convertListTo(categoryService.findAll(), CategoryResponse.class);
    }

    @Override
    public Page<CategoryResponse> findAll(Pageable pageable) {
        return categoryService.findAll(pageable).map(c -> mapper.convertTo(c, CategoryResponse.class));
    }

    @Override
    public CategoryResponse findById(Long id) {
        return mapper.convertTo(categoryService.findById(id), CategoryResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        categoryService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        categoryService.deleteAllById(ids);
    }

    @Override
    public CategoryResponse update(CategoryRequest categoryRequest) {
        Category category = categoryService.update(mapper.convertTo(categoryRequest, Category.class));
        return mapper.convertTo(category, CategoryResponse.class);
    }
}

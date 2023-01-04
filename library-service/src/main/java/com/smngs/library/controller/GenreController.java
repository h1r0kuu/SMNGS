package com.smngs.library.controller;

import com.smngs.library.dto.genre.GenreRequest;
import com.smngs.library.dto.genre.GenreResponse;
import com.smngs.library.mapper.GenreMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/genres")
@RequiredArgsConstructor
public class GenreController {

    private final GenreMapper genreMapper;

    @PostMapping
    private ResponseEntity<GenreResponse> create(@Valid @RequestBody GenreRequest genreRequest) {
        GenreResponse category = genreMapper.create(genreRequest);
        return ResponseEntity.ok(category);
    }

//    @PutMapping
//    private ResponseEntity<CategoryResponse> update(@Valid @RequestBody categoryUpdateRequest categoryUpdateRequest) {
//        CategoryResponse category = categoryMapper.update(categoryUpdateRequest);
//        return ResponseEntity.ok(category);
//    }

    @GetMapping("/{genreId}")
    private ResponseEntity<GenreResponse> getById(@PathVariable("genreId") Long genreId) {
        return ResponseEntity.ok(genreMapper.findById(genreId));
    }

    @DeleteMapping("/{categoryId}")
    private ResponseEntity<String> deleteById(@PathVariable("genreId") Long genreId) {
        genreMapper.deleteById(genreId);
        return ResponseEntity.ok("Category deleted");
    }

    @GetMapping
    private ResponseEntity<Page<GenreResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<GenreResponse> categories = genreMapper.findAll(pageable);
        return ResponseEntity.ok(categories);
    }
}

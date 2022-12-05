package com.smngs.library.controller;

import com.smngs.library.dto.author.AuthorRequest;
import com.smngs.library.dto.author.AuthorResponse;
import com.smngs.library.mapper.AuthorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/authors")
@RequiredArgsConstructor
public class AuthorController {

    private final AuthorMapper authorMapper;

    @PostMapping
    private ResponseEntity<AuthorResponse> create(@Valid @RequestBody AuthorRequest authorRequest) {
        AuthorResponse author = authorMapper.create(authorRequest);
        return ResponseEntity.ok(author);
    }

//    @PutMapping
//    private ResponseEntity<AuthorResponse> update(@Valid @RequestBody authorUpdateRequest authorUpdateRequest) {
//        AuthorResponse author = authorMapper.update(authorUpdateRequest);
//        return ResponseEntity.ok(author);
//    }

    @GetMapping("/{authorId}")
    private ResponseEntity<AuthorResponse> getById(@PathVariable("authorId") Long authorId) {
        return ResponseEntity.ok(authorMapper.findById(authorId));
    }

    @DeleteMapping("/{authorId}")
    private ResponseEntity<String> deleteById(@PathVariable("authorId") Long authorId) {
        authorMapper.deleteById(authorId);
        return ResponseEntity.ok("Author deleted");
    }

    @GetMapping
    private ResponseEntity<Page<AuthorResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<AuthorResponse> authors = authorMapper.findAll(pageable);
        return ResponseEntity.ok(authors);
    }
}

package com.smngs.library.controller;

import com.smngs.library.dto.book.BookRequest;
import com.smngs.library.dto.book.BookResponse;
import com.smngs.library.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {

    private final BookMapper bookMapper;

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    private ResponseEntity<BookResponse> create(@Valid @RequestBody BookRequest bookRequest) {
        BookResponse book = bookMapper.create(bookRequest, bookRequest.getFrontPicture());
        return ResponseEntity.ok(book);
    }

//    @PutMapping
//    private ResponseEntity<BookResponse> update(@Valid @RequestBody BookUpdateRequest bookUpdateRequest) {
//        BookResponse book = bookMapper.update(bookUpdateRequest);
//        return ResponseEntity.ok(book);
//    }

    @GetMapping("/{bookId}")
    private ResponseEntity<BookResponse> getById(@PathVariable("bookId") Long bookId) {
        return ResponseEntity.ok(bookMapper.findById(bookId));
    }

    @DeleteMapping("/{bookId}")
    private ResponseEntity<String> deleteById(@PathVariable("bookId") Long bookId) {
        bookMapper.deleteById(bookId);
        return ResponseEntity.ok("Book deleted");
    }

    @GetMapping
    private ResponseEntity<Page<BookResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<BookResponse> books = bookMapper.findAll(pageable);
        return ResponseEntity.ok(books);
    }
}

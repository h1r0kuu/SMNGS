package com.smngs.library.mapper;

import com.smngs.library.dto.book.BookRequest;
import com.smngs.library.dto.book.BookResponse;
import com.smngs.library.entity.Book;
import com.smngs.library.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class BookMapper implements MapperInterface<BookRequest, BookResponse> {

    private final BasicMapper mapper;
    private final BookService bookService;

    @Override
    public BookResponse create(BookRequest bookRequest) {
        Book book = bookService.create(mapper.convertTo(bookRequest, Book.class));
        return mapper.convertTo(book, BookResponse.class);
    }

    @Override
    public List<BookResponse> findAll() {
        return mapper.convertListTo(bookService.findAll(), BookResponse.class);
    }

    @Override
    public Page<BookResponse> findAll(Pageable pageable) {
        return bookService.findAll(pageable).map(b -> mapper.convertTo(b, BookResponse.class));
    }

    @Override
    public BookResponse findById(Long id) {
        return mapper.convertTo(bookService.findById(id), BookResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        bookService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        bookService.deleteAllById(ids);
    }

    @Override
    public BookResponse update(BookRequest bookRequest) {
        Book book = bookService.update(mapper.convertTo(bookRequest, Book.class));
        return mapper.convertTo(book, BookResponse.class);
    }
}

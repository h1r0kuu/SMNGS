package com.smngs.library.service.impl;

import com.smngs.library.dto.file.FileResponse;
import com.smngs.library.entity.Book;
import com.smngs.library.repository.BookRepository;
import com.smngs.library.service.BookService;
import com.smngs.library.utils.FileUpload;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final WebClient.Builder webClientBuilder;
    @Value("${file.service}")
    private String fileServiceUrl;

    @Override
    public Book create(Book book) {
        return bookRepository.save(book);
    }


    @Override
    public Book create(Book book, MultipartFile frontPicture) {
        if(book.getFrontPicture() != null) {
            FileResponse response = FileUpload.UploadFile(frontPicture, fileServiceUrl + "/user", webClientBuilder);
            book.setFrontPicture(response.getUrl());
        }
        return create(book);
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Page<Book> findAll(Pageable pageable) {
        return bookRepository.findAll(pageable);
    }

    @Override
    public Book findById(Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find book with that id"));
    }

    @Override
    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        bookRepository.deleteAllById(ids);
    }

    @Override
    public Book update(Book book) {
        return create(book);
    }
}

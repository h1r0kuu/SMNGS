package com.smngs.library.service.impl;

import com.smngs.library.entity.Author;
import com.smngs.library.repository.AuthorRepository;
import com.smngs.library.service.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    @Override
    public Author create(Author author) {
        return authorRepository.save(author);
    }

    @Override
    public List<Author> findAll() {
        return authorRepository.findAll();
    }

    @Override
    public Page<Author> findAll(Pageable pageable) {
        return authorRepository.findAll(pageable);
    }

    @Override
    public Author findById(Long id) {
        return authorRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find category with that id"));
    }

    @Override
    public void deleteById(Long id) {
        authorRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        authorRepository.deleteAllById(ids);
    }

    @Override
    public Author update(Author author) {
        return create(author);
    }
}

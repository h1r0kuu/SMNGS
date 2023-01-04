package com.smngs.library.service.impl;

import com.smngs.library.entity.Genre;
import com.smngs.library.repository.GenreRepository;
import com.smngs.library.service.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class GenreServiceImpl implements GenreService {

    private final GenreRepository genreRepository;

    @Override
    public Genre create(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public List<Genre> findAll() {
        return genreRepository.findAll();
    }

    @Override
    public Page<Genre> findAll(Pageable pageable) {
        return genreRepository.findAll(pageable);
    }

    @Override
    public Genre findById(Long id) {
        return genreRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Cannot find category with that id"));
    }

    @Override
    public void deleteById(Long id) {
        genreRepository.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        genreRepository.deleteAllById(ids);
    }

    @Override
    public Genre update(Genre genre) {
        return create(genre);
    }
}

package com.smngs.library.mapper;

import com.smngs.library.dto.genre.GenreRequest;
import com.smngs.library.dto.genre.GenreResponse;
import com.smngs.library.entity.Genre;
import com.smngs.library.service.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class GenreMapper implements MapperInterface<GenreRequest, GenreResponse> {

    private final BasicMapper mapper;
    private final GenreService genreService;

    @Override
    public GenreResponse create(GenreRequest genreRequest) {
        Genre genre = genreService.create(mapper.convertTo(genreRequest, Genre.class));
        return mapper.convertTo(genre, GenreResponse.class);
    }

    @Override
    public List<GenreResponse> findAll() {
        return mapper.convertListTo(genreService.findAll(), GenreResponse.class);
    }

    @Override
    public Page<GenreResponse> findAll(Pageable pageable) {
        return genreService.findAll(pageable).map(c -> mapper.convertTo(c, GenreResponse.class));
    }

    @Override
    public GenreResponse findById(Long id) {
        return mapper.convertTo(genreService.findById(id), GenreResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        genreService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        genreService.deleteAllById(ids);
    }

    @Override
    public GenreResponse update(GenreRequest genreRequest) {
        Genre genre = genreService.update(mapper.convertTo(genreRequest, Genre.class));
        return mapper.convertTo(genre, GenreResponse.class);
    }
}

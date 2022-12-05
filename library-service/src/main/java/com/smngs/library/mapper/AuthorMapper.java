package com.smngs.library.mapper;

import com.smngs.library.dto.author.AuthorRequest;
import com.smngs.library.dto.author.AuthorResponse;
import com.smngs.library.entity.Author;
import com.smngs.library.service.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class AuthorMapper implements MapperInterface<AuthorRequest, AuthorResponse> {

    private final BasicMapper mapper;
    private final AuthorService authorService;

    @Override
    public AuthorResponse create(AuthorRequest authorRequest) {
        Author author = authorService.create(mapper.convertTo(authorRequest, Author.class));
        return mapper.convertTo(author, AuthorResponse.class);
    }

    @Override
    public List<AuthorResponse> findAll() {
        return mapper.convertListTo(authorService.findAll(), AuthorResponse.class);
    }

    @Override
    public Page<AuthorResponse> findAll(Pageable pageable) {
        return authorService.findAll(pageable).map(a -> mapper.convertTo(a, AuthorResponse.class));
    }

    @Override
    public AuthorResponse findById(Long id) {
        return mapper.convertTo(authorService.findById(id), AuthorResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        authorService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        authorService.deleteAllById(ids);
    }

    @Override
    public AuthorResponse update(AuthorRequest authorRequest) {
        Author author = authorService.update(mapper.convertTo(authorRequest, Author.class));
        return mapper.convertTo(author, AuthorResponse.class);
    }
}

package com.smngs.library.dto.book;

import com.smngs.library.dto.author.AuthorWithoutBooksResponse;
import com.smngs.library.entity.Author;
import com.smngs.library.entity.Publisher;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class BookWithoutGenreResponse {
    private Long id;
    private String title;
    private Publisher publisher;
    private List<AuthorWithoutBooksResponse> authors;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

package com.smngs.library.dto.book;

import com.smngs.library.dto.author.AuthorWithoutBooksResponse;
import com.smngs.library.dto.genre.GenreWithoutBooksResponse;
import com.smngs.library.dto.publisher.PublisherWithoutBooksResponse;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class BookResponse {
    private Long id;
    private String title;
    private String frontPicture;
    private List<GenreWithoutBooksResponse> genres;
    private PublisherWithoutBooksResponse publisher;
    private List<AuthorWithoutBooksResponse> authors;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

package com.smngs.library.dto.book;

import com.smngs.library.dto.author.AuthorWithoutBooksResponse;
import com.smngs.library.dto.category.CategoryWithoutBooksResponse;
import com.smngs.library.dto.publisher.PublisherWithoutBooksResponse;

import java.time.LocalDateTime;
import java.util.List;

public class BookResponse {
    private Long id;
    private String title;
    private String frontPicture;
    private CategoryWithoutBooksResponse category;
    private PublisherWithoutBooksResponse publisher;
    private List<AuthorWithoutBooksResponse> authors;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

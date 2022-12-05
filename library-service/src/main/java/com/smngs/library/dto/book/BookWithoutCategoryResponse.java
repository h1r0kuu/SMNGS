package com.smngs.library.dto.book;

import com.smngs.library.entity.Author;
import com.smngs.library.entity.Publisher;

import java.time.LocalDateTime;
import java.util.List;

public class BookWithoutCategoryResponse {
    private Long id;
    private String title;
    private Publisher publisher;
    private List<Author> authors;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

package com.smngs.library.dto.book;

import com.smngs.library.entity.Author;
import com.smngs.library.entity.Category;

import java.time.LocalDateTime;
import java.util.List;

public class BookWithoutPublisherResponse {
    private Long id;
    private String title;
    private Category category;
    private List<Author> authors;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

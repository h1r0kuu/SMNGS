package com.smngs.library.dto.book;

import com.smngs.library.entity.Category;
import com.smngs.library.entity.Publisher;

import java.time.LocalDateTime;

public class BookWithoutAuthorResponse {
    private Long id;
    private String title;
    private Category category;
    private Publisher publisher;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

package com.smngs.library.dto.category;

import com.smngs.library.entity.Book;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class CategoryResponse {
    private Long id;
    private String title;
    private List<Book> books;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

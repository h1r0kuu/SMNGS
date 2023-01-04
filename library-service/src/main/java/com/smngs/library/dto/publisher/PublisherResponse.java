package com.smngs.library.dto.publisher;

import com.smngs.library.entity.Book;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class PublisherResponse {
    private Long id;
    private String title;
    private List<Book> books;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

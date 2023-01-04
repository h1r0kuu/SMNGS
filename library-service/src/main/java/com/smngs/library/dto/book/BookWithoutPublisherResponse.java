package com.smngs.library.dto.book;

import com.smngs.library.entity.Author;
import com.smngs.library.entity.Genre;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class BookWithoutPublisherResponse {
    private Long id;
    private String title;
    private Genre genre;
    private List<Author> authors;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

package com.smngs.library.dto.book;

import com.smngs.library.entity.Genre;
import com.smngs.library.entity.Publisher;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BookWithoutAuthorResponse {
    private Long id;
    private String title;
    private Genre genre;
    private Publisher publisher;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

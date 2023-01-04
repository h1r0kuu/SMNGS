package com.smngs.library.dto.genre;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class GenreWithoutBooksResponse {
    private Long id;
    private String title;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

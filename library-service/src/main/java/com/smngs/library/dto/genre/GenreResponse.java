package com.smngs.library.dto.genre;

import com.smngs.library.dto.book.BookWithoutGenreResponse;
import com.smngs.library.entity.Book;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class GenreResponse {
    private Long id;
    private String title;
    private List<BookWithoutGenreResponse> books;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

package com.smngs.library.dto.author;

import com.smngs.library.dto.book.BookWithoutAuthorResponse;

import java.time.LocalDateTime;
import java.util.List;

public class AuthorResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private List<BookWithoutAuthorResponse> books;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

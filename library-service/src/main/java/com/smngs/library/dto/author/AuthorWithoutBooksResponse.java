package com.smngs.library.dto.author;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AuthorWithoutBooksResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

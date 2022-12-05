package com.smngs.library.dto.book;

import com.smngs.library.entity.Author;
import com.smngs.library.entity.Category;
import com.smngs.library.entity.Publisher;
import lombok.Data;

import java.util.List;

@Data
public class BookRequest {
    private String title;
    private Category category;
    private Publisher publisher;
    private List<Author> authors;
}

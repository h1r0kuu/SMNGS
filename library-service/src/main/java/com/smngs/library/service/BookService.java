package com.smngs.library.service;

import com.smngs.library.entity.Book;
import org.springframework.web.multipart.MultipartFile;

public interface BookService extends BaseInterface<Book> {
    Book create(Book book, MultipartFile frontPicture);
}

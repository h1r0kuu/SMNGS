package com.smngs.library.dto.book;

import com.smngs.library.entity.Publisher;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class BookRequest {
    private String title;
    private Long[] genres;
    private Publisher publisher;
    private Long[] authors;
    private MultipartFile frontPicture;

}

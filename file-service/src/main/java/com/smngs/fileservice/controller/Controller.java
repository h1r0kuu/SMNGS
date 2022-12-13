package com.smngs.fileservice.controller;

import com.smngs.fileservice.producer.FileURLProducer;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;


@RestController
@RequestMapping("/api/v1/files/upload")
@RequiredArgsConstructor
public class Controller {

    @Value("${user.image.upload.path}")
    private String userImgUploadPath;

    @Value("${book.image.upload.path}")
    private String bookImgUploadPath;

    @Value("${host}")
    private String host;

    @PostMapping(path = "/user", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    private ResponseEntity<HashMap<String, String>> uploadUserImg(@ModelAttribute MultipartFile file) throws IOException {
        return ResponseEntity.ok(FileURLProducer.uploadAndGetURL(userImgUploadPath, file, host));
    }

    @PostMapping(path = "/book", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    private ResponseEntity<HashMap<String, String>> uploadBookImg(@ModelAttribute MultipartFile file) throws IOException {
        return ResponseEntity.ok(FileURLProducer.uploadAndGetURL(bookImgUploadPath, file, host));
    }
}

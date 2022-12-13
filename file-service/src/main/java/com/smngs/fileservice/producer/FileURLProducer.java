package com.smngs.fileservice.producer;

import com.smngs.fileservice.uploader.FileUpload;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;

public class FileURLProducer {
    public static HashMap<String, String> uploadAndGetURL(String uploadPath,
                                              MultipartFile file,
                                              String host) throws IOException {
        HashMap<String, String> result = new HashMap<>();
        FileUpload.upload(uploadPath, file.getOriginalFilename(), file);
        result.put("url", host + "img/" + file.getOriginalFilename());
        return result;
    }
}

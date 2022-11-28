package com.smngs.backend.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Slf4j
public class FileUpload {

    public static String upload(String uploadDir,
                                String fileName,
                                MultipartFile image) throws IOException {
        Path uploadPath = Paths.get(uploadDir);
        Path filePath = null;

        if(!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        try (InputStream inputStream = image.getInputStream()) {
            filePath = uploadPath.resolve(fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        } catch(IOException exception) {
            log.error(exception.getMessage());
        }
        assert filePath != null;
        return filePath.toString().replace("\\","/");
    }
}

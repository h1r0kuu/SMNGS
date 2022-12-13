package com.smngs.fileservice.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Value("${user.image.upload.path}")
    private String userPath;

    @Value("${book.image.upload.path}")
    private String bookPath;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        exposeDirectory("/img/**", userPath, registry);
        exposeDirectory("/img/**", bookPath, registry);
    }

    private void exposeDirectory(String pathPattern, String dirName, ResourceHandlerRegistry registry) {
        if (dirName.startsWith("../")) dirName = dirName.replace("../", "");
        Path uploadDir = Paths.get(dirName);
        String uploadPath = uploadDir.toFile().getAbsolutePath();
        uploadPath = uploadPath.replaceAll("\\\\", "/");
        registry.addResourceHandler(pathPattern).addResourceLocations("file:///"+ uploadPath + "/");
    }
}


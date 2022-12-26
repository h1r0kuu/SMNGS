package com.smngs.library.utils;

import com.smngs.library.dto.file.FileResponse;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

public class FileUpload {

    public static FileResponse UploadFile(MultipartFile file,
                                          String uri,
                                          WebClient.Builder webClientBuilder) {
        MultipartBodyBuilder builder = new MultipartBodyBuilder();
        builder.part("file", file.getResource());
        return webClientBuilder.build().post()
                .uri(uri)
                .contentType(MediaType.IMAGE_JPEG)
                .body(BodyInserters.fromMultipartData(builder.build()))
                .retrieve()
                .bodyToMono(FileResponse.class)
                .block();
    }
}

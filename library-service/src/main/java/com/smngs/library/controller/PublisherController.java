package com.smngs.library.controller;

import com.smngs.library.dto.publisher.PublisherRequest;
import com.smngs.library.dto.publisher.PublisherResponse;
import com.smngs.library.mapper.PublisherMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/publishers")
@RequiredArgsConstructor
public class PublisherController {

    private final PublisherMapper publisherMapper;

    @PostMapping
    private ResponseEntity<PublisherResponse> create(@Valid @RequestBody PublisherRequest publisherRequest) {
        PublisherResponse publisher = publisherMapper.create(publisherRequest);
        return ResponseEntity.ok(publisher);
    }

//    @PutMapping
//    private ResponseEntity<PublisherResponse> update(@Valid @RequestBody publisherUpdateRequest categoryUpdateRequest) {
//        PublisherResponse publisher = publisherMapper.update(publisherUpdateRequest);
//        return ResponseEntity.ok(publisher);
//    }

    @GetMapping("/{publisherId}")
    private ResponseEntity<PublisherResponse> getById(@PathVariable("publisherId") Long publisherId) {
        return ResponseEntity.ok(publisherMapper.findById(publisherId));
    }

    @DeleteMapping("/{publisherId}")
    private ResponseEntity<String> deleteById(@PathVariable("publisherId") Long publisherId) {
        publisherMapper.deleteById(publisherId);
        return ResponseEntity.ok("Publisher deleted");
    }

    @GetMapping
    private ResponseEntity<Page<PublisherResponse>> getAll(@PageableDefault Pageable pageable) {
        Page<PublisherResponse> publishers = publisherMapper.findAll(pageable);
        return ResponseEntity.ok(publishers);
    }
}

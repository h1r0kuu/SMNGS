package com.smngs.library.mapper;

import com.smngs.library.dto.publisher.PublisherRequest;
import com.smngs.library.dto.publisher.PublisherResponse;
import com.smngs.library.entity.Publisher;
import com.smngs.library.service.PublisherService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class PublisherMapper implements MapperInterface<PublisherRequest, PublisherResponse> {

    private final BasicMapper mapper;
    private final PublisherService publisherService;

    @Override
    public PublisherResponse create(PublisherRequest publisherRequest) {
        Publisher publisher = publisherService.create(mapper.convertTo(publisherRequest, Publisher.class));
        return mapper.convertTo(publisher, PublisherResponse.class);
    }

    @Override
    public List<PublisherResponse> findAll() {
        return mapper.convertListTo(publisherService.findAll(), PublisherResponse.class);
    }

    @Override
    public Page<PublisherResponse> findAll(Pageable pageable) {
        return publisherService.findAll(pageable).map(p -> mapper.convertTo(p, PublisherResponse.class));
    }

    @Override
    public PublisherResponse findById(Long id) {
        return mapper.convertTo(publisherService.findById(id), PublisherResponse.class);
    }

    @Override
    public void deleteById(Long id) {
        publisherService.deleteById(id);
    }

    @Override
    public void deleteAllById(List<Long> ids) {
        publisherService.deleteAllById(ids);
    }

    @Override
    public PublisherResponse update(PublisherRequest publisherRequest) {
        Publisher publisher = publisherService.update(mapper.convertTo(publisherRequest, Publisher.class));
        return mapper.convertTo(publisher, PublisherResponse.class);
    }
}

package com.smnas.backend.mapper;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.spi.DestinationSetter;
import org.modelmapper.spi.SourceGetter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class BasicMapper {

    private final ModelMapper mapper;

    public <T, S> S convertTo(T data, Class<S> type) {
        return mapper.map(data, type);
    }
    public <T, S> S convertTo(T data, Class<S> type, PropertyMap<T, S> clientPropertyMap) {
        mapper.addMappings(clientPropertyMap);
        return mapper.map(data, type);
    }

    public <T, S> List<S> convertListTo(List<T> dataList, Class<S> type) {
        return dataList.stream()
                .map(data -> mapper.map(data, type))
                .collect(Collectors.toList());
    }
}

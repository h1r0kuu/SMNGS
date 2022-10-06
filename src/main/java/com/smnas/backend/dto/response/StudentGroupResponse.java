package com.smnas.backend.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class StudentGroupResponse {
    private Long id;
    private Integer groupTerm;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

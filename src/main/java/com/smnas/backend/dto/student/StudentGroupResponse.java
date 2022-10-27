package com.smnas.backend.dto.student;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class StudentGroupResponse {
    private Long id;
    private String groupName;
    private Integer groupTerm;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

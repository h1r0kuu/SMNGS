package com.smnas.backend.dto.group;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class GroupResponse {
    private Long id;
    private Integer groupTerm;
    private List<GroupStudentResponse> students;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

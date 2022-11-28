package com.smnas.backend.dto.student;

import com.smnas.backend.dto.groupsubject.GroupSubjectResponse;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class StudentGroupResponse {
    private Long id;
    private String groupName;
    private Integer groupTerm;
    private List<GroupSubjectResponse> groupSubjects;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

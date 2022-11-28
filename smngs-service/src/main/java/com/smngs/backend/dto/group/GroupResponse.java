package com.smngs.backend.dto.group;

import com.smngs.backend.dto.groupsubject.GroupSubjectResponse;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class GroupResponse {
    private Long id;
    private String groupName;
    private Integer groupTerm;
    private List<GroupStudentResponse> students;
    private List<GroupSubjectResponse> groupSubjects;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

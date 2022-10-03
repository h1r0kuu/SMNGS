package com.smnas.backend.dto.response;

import com.smnas.backend.entity.User;
import lombok.Data;

import java.util.List;

@Data
public class SubjectResponse {
    private Long id;
    private String subjectName;
    private List<User> teachers;
}

package com.smngs.backend.dto.subject;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Data
public class SubjectRequest {
    @NotNull
    @NotBlank
    @Size(min = 3, max = 30)
    private String subjectName;

    private List<Long> teacherIds = new ArrayList<>();
}

package com.smnas.backend.dto.group;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
public class GroupRequest {
    @Positive
    @Max(value = 10)
    private Integer groupTerm;

    @NotBlank
    @NotNull
    private String groupName;
}
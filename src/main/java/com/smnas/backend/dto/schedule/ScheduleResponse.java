package com.smnas.backend.dto.schedule;

import com.smnas.backend.dto.group.GroupResponse;
import com.smnas.backend.dto.subject.SubjectResponse;
import com.smnas.backend.entity.Group;
import com.smnas.backend.entity.Subject;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

public class ScheduleResponse {
    private Long id;
    private GroupResponse group;
    private SubjectResponse subject;
    private LocalDateTime timeStart;
    private LocalDateTime timeEnd;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

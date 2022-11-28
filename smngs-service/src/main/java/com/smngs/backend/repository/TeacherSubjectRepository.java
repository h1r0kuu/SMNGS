package com.smngs.backend.repository;

import com.smngs.backend.entity.TeacherSubject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherSubjectRepository extends JpaRepository<TeacherSubject, Long> {
    TeacherSubject findBySubjectIdAndTeacherId(Long subjectId, Long teacherId);
}

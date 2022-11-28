package com.smnas.backend.service;

import com.smnas.backend.entity.TeacherSubject;

public interface TeacherSubjectService extends BaseInterface<TeacherSubject> {
    TeacherSubject findBySubjectIdAndTeacherId(Long subjectId, Long teacherId);
}

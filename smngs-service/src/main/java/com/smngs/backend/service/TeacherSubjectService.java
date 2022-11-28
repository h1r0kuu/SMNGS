package com.smngs.backend.service;

import com.smngs.backend.entity.TeacherSubject;

public interface TeacherSubjectService extends BaseInterface<TeacherSubject> {
    TeacherSubject findBySubjectIdAndTeacherId(Long subjectId, Long teacherId);
}

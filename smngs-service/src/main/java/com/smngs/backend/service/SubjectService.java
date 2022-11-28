package com.smngs.backend.service;

import com.smngs.backend.entity.Subject;
import com.smngs.backend.entity.Teacher;

public interface SubjectService extends BaseInterface<Subject>{
    Subject addTeacher(Long subjectId, Teacher teacher);
    Subject removeTeacher(Long subjectId, Teacher teacher);
}

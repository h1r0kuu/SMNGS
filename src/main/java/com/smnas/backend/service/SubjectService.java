package com.smnas.backend.service;

import com.smnas.backend.entity.Subject;
import com.smnas.backend.entity.Teacher;
import com.smnas.backend.entity.User;

import java.util.List;

public interface SubjectService extends BaseInterface<Subject>{
    Subject addTeacher(Long subjectId, Teacher teacher);
    Subject removeTeacher(Long subjectId, Teacher teacher);
}

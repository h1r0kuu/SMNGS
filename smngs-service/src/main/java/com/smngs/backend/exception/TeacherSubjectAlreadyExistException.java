package com.smngs.backend.exception;

public class TeacherSubjectAlreadyExistException extends RuntimeException {

    public TeacherSubjectAlreadyExistException(String msg) {
        super(msg);
    }
}

package com.smngs.backend.exception;

public class UserAlreadyExistException extends RuntimeException {

    public UserAlreadyExistException(String msg) {
        super(msg);
    }
}

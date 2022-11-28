package com.smnas.backend.exception;

public class UserAlreadyExistException extends RuntimeException {

    public UserAlreadyExistException(String msg) {
        super(msg);
    }
}

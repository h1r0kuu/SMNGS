package com.smnas.backend.exception;

public class BadRoleException extends IllegalArgumentException {

    public BadRoleException(String msg) {
        super(msg);
    }
}

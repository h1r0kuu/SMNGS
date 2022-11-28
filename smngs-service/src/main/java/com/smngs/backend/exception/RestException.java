package com.smngs.backend.exception;

import com.smngs.backend.dto.error.ErrorModel;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.*;
import java.util.stream.Collectors;

@ControllerAdvice
@ResponseStatus
public class RestException extends ResponseEntityExceptionHandler {
    private Map<String, Object> buildResponse(HttpStatus status, String errorMessage) {
        Map<String, Object> error = new HashMap<>();
        error.put("status_code", status.value());
        error.put("error", errorMessage);
        return error;
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<Map<String, Object>> noSuchElementException(NoSuchElementException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(buildResponse(HttpStatus.NOT_FOUND, exception.getMessage()));
    }

    @ExceptionHandler(BadRoleException.class)
    public ResponseEntity<Map<String, Object>> badRoleException(BadRoleException exception) {
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(buildResponse(HttpStatus.NOT_ACCEPTABLE, exception.getMessage()));
    }

    @ExceptionHandler(UserAlreadyExistException.class)
    public ResponseEntity<Map<String, Object>> userAlreadyExistException(UserAlreadyExistException exception) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(buildResponse(HttpStatus.CONFLICT, exception.getMessage()));
    }

    @ExceptionHandler(TeacherSubjectAlreadyExistException.class)
    public ResponseEntity<Map<String, Object>> teacherSubjectAlreadyExistException(TeacherSubjectAlreadyExistException exception) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(buildResponse(HttpStatus.CONFLICT, exception.getMessage()));
    }

    private ResponseEntity<Object> exceptionWithBinding(BindException ex,
                                                        HttpHeaders headers,
                                                        HttpStatus status, WebRequest request) {
        HashMap<String, Object> body = new HashMap<>();
        body.put("timestamp", new Date());
        body.put("status", status.value());

        List<ErrorModel> errorMessages = ex.getBindingResult().getFieldErrors().stream()
                .map(err -> new ErrorModel(err.getField(), err.getRejectedValue(), err.getDefaultMessage()))
                .distinct()
                .collect(Collectors.toList());
        body.put("errors", errorMessages);

        return new ResponseEntity<>(body, headers, status);
    }

    @Override
    public ResponseEntity<Object> handleBindException(BindException ex,
                                                      HttpHeaders headers,
                                                      HttpStatus status, WebRequest request) {
        return exceptionWithBinding(ex, headers,status,request);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatus status, WebRequest request) {
        return exceptionWithBinding(ex, headers,status,request);
    }
}

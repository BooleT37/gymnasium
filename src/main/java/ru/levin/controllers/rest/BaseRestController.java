package ru.levin.controllers.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ru.levin.model.RestError;

public class BaseRestController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @ExceptionHandler({ AccessDeniedException.class })
    public ResponseEntity<RestError> accessDeniedHandler(Exception e) {
        return getResponseEntity(e.getMessage(), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<RestError> defaultErrorHandler(Exception e) throws Exception {
        return getResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private ResponseEntity<RestError> getResponseEntity(String errorMessage, HttpStatus status) {
        logger.error(errorMessage);
        RestError body = new RestError(errorMessage);
        return new ResponseEntity<>(body, status);
    }
}

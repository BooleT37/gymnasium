package ru.levin.controllers.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ru.levin.admin.controllers.rest.exceptions.*;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.model.RestError;

public class BaseRestController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @ExceptionHandler({ WrongPasswordException.class, NoEmailException.class, EmailAlreadyInUseException.class, BadRequestException.class, LoginAlreadyExistsException.class})
    public ResponseEntity<RestError> badRequestHandler(Exception e) {
        return getResponseEntity(e, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({ AccessDeniedException.class })
    public ResponseEntity<RestError> accessDeniedHandler(Exception e) {
        return getResponseEntity(e, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler({ EntityNotFoundException.class })
    public ResponseEntity<RestError> entityNotFoundHandler(Exception e) {
        return getResponseEntity(e, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<RestError> defaultErrorHandler(Exception e) throws Exception {
        return getResponseEntity(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private ResponseEntity<RestError> getResponseEntity(Exception e, HttpStatus status) {
        logger.error(e.getMessage());
        RestError body = new RestError(e.getMessage(), e.getClass().getSimpleName());
        return new ResponseEntity<>(body, status);
    }
}

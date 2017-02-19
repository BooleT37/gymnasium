package ru.levin.controllers.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ru.levin.model.RestResponse;

import javax.servlet.http.HttpServletRequest;

public class BaseRestController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<RestResponse> defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
        logger.error(e.getMessage());
        RestResponse response = new RestResponse(false, e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

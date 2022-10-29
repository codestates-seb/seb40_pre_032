package com.codestates.pre032.pre032.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "entity is exists")
public class UserExistsException extends RuntimeException
{
    private static final long serialVersionUID = 1L;

    public UserExistsException(String message)
    {
        super(message);
    }
}

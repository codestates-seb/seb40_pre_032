package com.codestates.pre032.pre032.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "비밀번호가 틀렸습니다.")
public class InvalidPasswordException extends RuntimeException
{
    private static final long serialVersionUID = 1L;

    public InvalidPasswordException(String message)
    {
        super(message);
    }
}

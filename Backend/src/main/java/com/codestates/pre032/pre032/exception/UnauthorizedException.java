package com.codestates.pre032.pre032.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "접근 권한이 없습니다.")
public class UnauthorizedException extends RuntimeException
{
    private static final long serialVersionUID = 1L;

    public UnauthorizedException(String message)
    {
        super(message);
    }
}

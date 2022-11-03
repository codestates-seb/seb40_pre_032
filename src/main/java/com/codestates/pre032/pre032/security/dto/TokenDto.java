package com.codestates.pre032.pre032.security.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;

@Getter
public class TokenDto {
    @NotNull
    private String accessToken;
}

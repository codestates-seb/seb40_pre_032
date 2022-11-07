package com.codestates.pre032.pre032.security.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
public class TokenDto {
//    @NotNull
    private String accessToken;
}

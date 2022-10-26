package com.codestates.pre032.pre032.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class UserDto {
    @Getter
    @AllArgsConstructor
    public static class signUp{
        @NotBlank
        private String email;

        @NotBlank
        private String password;
    }
}

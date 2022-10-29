package com.codestates.pre032.pre032.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class UserDto {
    @Getter
    @AllArgsConstructor
    public static class signUp{
        @NotBlank
        private String email;

        @NotBlank
        private String displayName;

        @NotBlank
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class response{
        private Long userId;
        private String email;
        private String displayName;
        private String profileImage;
        private LocalDateTime creationDate;
        private int questionsLength;
        private int answersLength;
    }
}

package com.codestates.pre032.pre032.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class UserDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class signUp{
        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String displayName;

        @NotBlank
        private String password;

        @AssertTrue(message = "체크박스를 클릭해 주세요")
        private boolean isRobot;
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

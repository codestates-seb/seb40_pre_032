package com.codestates.pre032.pre032.question;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        private String subject;

        @NotBlank
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private String subject;

        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class response{
        private Long questionId;

        private String subject;

        private String content;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;
    }

}

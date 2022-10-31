package com.codestates.pre032.pre032.answer;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    public static class Post{
        @NotBlank
        private String answerContent;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private String answerContent;
    }

    @Builder
    @Getter
    public static class Response{

        private boolean isAccepted;
        private int score;
        private LocalDateTime creationDate;
        private Long answerId;
        private String answerContent;
//        private LocalDateTime modifiedAt;
    }
}

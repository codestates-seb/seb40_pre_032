package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.tag.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        private String title;

        @NotBlank
        private String questionContent;

        @NotBlank
        private String accessToken;

        private List<String> tags;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        //todo : 내용만 수정하기로 합의
//        private String title;

        private String questionContent;
    }

    @Getter
    @AllArgsConstructor
    public static class questionResponse{
        private Long questionId;

        private String title;

        private String questionContent;

        private LocalDateTime creationDate;

        private LocalDateTime modifiedAt;

    }

    @Getter
    @AllArgsConstructor
    public static class questionsResponse {
        private Long questionId;

        private List<Tag> tags;

        private String title;

        private boolean isAnswered;

        private int viewCount;

        private int answerCount;

        private int score;

        private LocalDateTime creationDate;

        private LocalDateTime modifiedAt;

        // todo : 유저 연관관계 추가
    }

}
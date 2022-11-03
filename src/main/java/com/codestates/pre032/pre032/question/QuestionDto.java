package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.answer.AnswerDto;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        private String title;

        @NotBlank
        private String questionContent;

        private List<String> tags;
        //액세스토큰
        private String accessToken;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        private String title;
        String questionContent;
        //액세스토큰
        private String accessToken;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class questionContentResponse {
        private List<String> tags;

//        private User owner;

        private boolean isAnswered;

        private int viewCount;

        private int answerCount;

        private int score;

        private LocalDateTime creationDate;

        private LocalDateTime modifiedAt;

        private Long questionId;

        private String questionContent;

        private String title;

        //질문 답변
        private List<AnswerDto.Response> answers;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Response {
        private List<String> tags;

//        private User owner;

        private boolean isAnswered;

        private int viewCount;

        private int answerCount;

        private int score;

        private LocalDateTime creationDate;

        private LocalDateTime modifiedAt;

        private Long questionId;

        private String questionContent;

        private String title;


    }

//    // 콘텐트 없는 버전
//    @Getter
//    @AllArgsConstructor
//    public static class questionResponse {
//        private List<String> tags;
//
////        private User owner;
//
//        private boolean isAnswered;
//
//        private int viewCount;
//
//        private int answerCount;
//
//        private int score;
//
//        private LocalDateTime creationDate;
//
//        private LocalDateTime modifiedAt;
//
//        private Long questionId;
//
//        private String title;
//
////        private LocalDateTime modifiedAt;
//    }
}

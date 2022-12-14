package com.codestates.pre032.pre032.answer;


import com.codestates.pre032.pre032.user.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    @Setter
    public static class Post{
        @NotBlank
        private String answerContent;
        //액세스토큰
        private String accessToken;
    }

    @Getter
    @Setter
    public static class Patch{

        private String answerContent;

        //액세스토큰
        private String accessToken;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{


        private boolean isAccepted;
        private int score;
        private LocalDateTime creationDate;
        private Long answerId;
        private String answerContent;
        private Long questionId;
        private UserDto.owner owner;
//        private LocalDateTime modifiedAt;
    }
}

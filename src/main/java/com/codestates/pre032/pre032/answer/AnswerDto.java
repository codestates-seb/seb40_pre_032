package com.codestates.pre032.pre032.answer;


import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    public static class PostDto{
        @NotBlank
        private String content;
    }

    @Getter
    public static class PatchDto{
        private String content;
    }

    @Builder
    @Getter
    public static class ResponseDto{
        private Long answerId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}

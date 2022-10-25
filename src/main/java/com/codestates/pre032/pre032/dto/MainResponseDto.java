package com.codestates.pre032.pre032.dto;

import com.codestates.pre032.pre032.question.QuestionDto;
import lombok.Getter;

import java.util.List;

@Getter
public class MainResponseDto {
    private final List<QuestionDto.questionResponse> items;

    public MainResponseDto(List<QuestionDto.questionResponse> items) {
        this.items = items;
    }
}

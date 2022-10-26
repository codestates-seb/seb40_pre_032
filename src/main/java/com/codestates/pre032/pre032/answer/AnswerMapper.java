package com.codestates.pre032.pre032.answer;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoAnswer(AnswerDto.PostDto answerPostDto);
    Answer answerPatchDtoAnswer(AnswerDto.PatchDto answerPatchDto);
    AnswerDto.ResponseDto answerToAnswerResponseDto(Answer answer);
}

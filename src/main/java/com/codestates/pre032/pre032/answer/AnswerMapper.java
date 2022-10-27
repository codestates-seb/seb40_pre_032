package com.codestates.pre032.pre032.answer;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    Answer answerPostDtoAnswer(AnswerDto.PostDto answerPostDto);
    Answer answerPatchDtoAnswer(AnswerDto.PatchDto answerPatchDto);
//    AnswerDto.ResponseDto answerToAnswerResponseDto(Answer answer);
}

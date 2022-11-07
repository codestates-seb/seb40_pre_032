package com.codestates.pre032.pre032.answer;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    Answer answerPostDtoAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoAnswer(AnswerDto.Patch answerPatchDto);
    default AnswerDto.Response answerToAnswerResponseDto(Answer answer){
        AnswerDto.Response response = new AnswerDto.Response(
                answer.isAccepted(),
                answer.getScore(),
                answer.getCreationDate(),
                answer.getAnswerId(),
                answer.getAnswerContent(),
                answer.getQuestion().getQuestionId(),
                answer.getOwnerDto()
        );
        return response;
    };
}

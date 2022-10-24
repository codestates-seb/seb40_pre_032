package com.codestates.pre032.pre032.question;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto);

    Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto);

    QuestionDto.response questionToQuestionResponseDto(Question question);
}

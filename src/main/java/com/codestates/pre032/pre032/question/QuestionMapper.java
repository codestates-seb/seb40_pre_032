package com.codestates.pre032.pre032.question;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto);

    Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto);

    QuestionDto.response questionToQuestionResponseDto(Question question);

    List<QuestionDto.response> questionsToQuestionResponseDto(List<Question> questions);
}

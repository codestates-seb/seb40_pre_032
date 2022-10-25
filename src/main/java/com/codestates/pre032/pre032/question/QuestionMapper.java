package com.codestates.pre032.pre032.question;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
     default Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto){
        if (questionPostDto == null) {
            return null;
        } else {
            Question question = new Question();
            question.setTitle(questionPostDto.getTitle());
            question.setQuestionContent(questionPostDto.getQuestionContent());
            question.setAccessToken(questionPostDto.getAccessToken());
            return question;
        }
    }
//    default Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto){
//        if (questionPatchDto == null) {
//            return null;
//        } else {
//            Question question = new Question();
//            question.setTitle(questionPostDto.getTitle());
//            question.setQuestionContent(questionPostDto.getQuestionContent());
//            question.setAccessToken(questionPostDto.getAccessToken());
//            return question;
//        }
//    };

    QuestionDto.questionResponse questionToQuestionResponseDto(Question question);

//    List<QuestionDto.questionsResponse> questionsToQuestionResponseDto(List<Question> questions);
}

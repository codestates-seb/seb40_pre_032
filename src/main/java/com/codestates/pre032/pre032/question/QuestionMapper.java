package com.codestates.pre032.pre032.question;

import org.mapstruct.Mapper;

import java.util.ArrayList;
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

    QuestionDto.questionContentResponse questionToQuestionContentResponseDto(Question question);

    default List<QuestionDto.questionResponse> questionToQuestionResponseDto(List<Question> questions){
        List<QuestionDto.questionResponse> answer = new ArrayList<>();
        if (questions.size()==0) {
            return null;
        } else {
            for (Question question : questions){
                QuestionDto.questionResponse response = new QuestionDto.questionResponse(
                        question.getTags(),
                        question.isAnswered(),
                        question.getViewCount(),
                        question.getAnswerCount(),
                        question.getScore(),
                        question.getCreationDate(),
                        question.getQuestionId(),
                        question.getTitle()
                );
                answer.add(response);
            }
            return answer;
        }
    }
}

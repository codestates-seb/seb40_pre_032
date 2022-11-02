package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.answer.Answer;
import com.codestates.pre032.pre032.answer.AnswerDto;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto) {
        if (questionPostDto == null) {
            return null;
        } else {
            Question question = new Question();
            question.setTitle(questionPostDto.getTitle());
            question.setQuestionContent(questionPostDto.getQuestionContent());
            return question;
        }
    }

    default QuestionDto.questionContentResponse questionToQuestionContentResponseDto(Question question) {
        List<Answer> answers = question.getAnswers();

        QuestionDto.questionContentResponse questionResponse = new QuestionDto.questionContentResponse();
        questionResponse.setTags(question.getTagstr());
        questionResponse.setAnswered(question.isAnswered());
        questionResponse.setViewCount(question.getViewCount());
        questionResponse.setAnswerCount(question.getAnswerCount());
        questionResponse.setScore(question.getScore());
        questionResponse.setCreationDate(question.getCreationDate());
        questionResponse.setModifiedAt(question.getModifiedAt());
        questionResponse.setQuestionId(question.getQuestionId());
        questionResponse.setTitle(question.getTitle());
        questionResponse.setQuestionContent(question.getQuestionContent());
        questionResponse.setAnswers(questionAnswersToQuestionAnswerResponse(answers));

        return questionResponse;

    }

    //질문에 대한 답변
    default List<AnswerDto.Response> questionAnswersToQuestionAnswerResponse(List<Answer> answers) {
        return answers
                .stream()
                .map(questionAnswer -> AnswerDto.Response
                        .builder()
                        .isAccepted(questionAnswer.isAccepted())
                        .score(questionAnswer.getScore())
                        .creationDate(questionAnswer.getCreationDate())
                        .answerId(questionAnswer.getAnswerId())
                        .answerContent(questionAnswer.getAnswerContent())
                        .build())
                .collect(Collectors.toList());
    }

    default List<QuestionDto.questionContentResponse> questionsToQuestionContentResponsesDto(List<Question> questions){
        if (questions == null) {
            return null;
        } else {
            List<QuestionDto.questionContentResponse> list = new ArrayList(questions.size());
            Iterator var3 = questions.iterator();

            while(var3.hasNext()) {
                Question question = (Question)var3.next();
                if (question.getQuestionContent().length()>190){
                    question.setQuestionContent(question.getQuestionContent().substring(0,190));
                }
                list.add(this.questionToQuestionContentResponseDto(question));
            }

            return list;
        }
    }

    QuestionDto.Response questionToQuestionResponse(Question question);
}

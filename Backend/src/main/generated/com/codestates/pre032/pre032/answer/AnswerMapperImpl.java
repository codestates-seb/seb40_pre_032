package com.codestates.pre032.pre032.answer;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-31T16:11:54+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoAnswer(AnswerDto.Post answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerContent( answerPostDto.getAnswerContent() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoAnswer(AnswerDto.Patch answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerContent( answerPatchDto.getAnswerContent() );

        return answer;
    }

    @Override
    public AnswerDto.Response answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDto.Response.ResponseBuilder response = AnswerDto.Response.builder();

        response.score( answer.getScore() );
        response.creationDate( answer.getCreationDate() );
        response.answerId( answer.getAnswerId() );
        response.answerContent( answer.getAnswerContent() );

        return response.build();
    }
}

package com.codestates.pre032.pre032.answer;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;


    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Long answerId, Answer answer){
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setContent(answer.getContent());
        return answerRepository.save(findAnswer);
    }

    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        if(optionalAnswer.isPresent()){
            return optionalAnswer.get();
        } else{
            throw new DataNotFoundException("question not found");
        }

    }

    public void deleteAnswer(Long answerId){
        Answer answer = findVerifiedAnswer(answerId);
        answerRepository.delete(answer);
    }
}

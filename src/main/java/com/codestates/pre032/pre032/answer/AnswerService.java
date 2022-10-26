package com.codestates.pre032.pre032.answer;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.question.QuestionService;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
    }

    public Answer createAnswer(Long id, Answer answer){
        Question question = questionService.find(id);
        question.setAnswerCount(question.getAnswerCount()+1);
        answer.setQuestion(question);

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
        answer.getQuestion().setAnswerCount(answer.getQuestion().getAnswerCount()-1);
        answerRepository.delete(answer);
    }
}

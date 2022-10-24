package com.codestates.pre032.pre032.question;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question create(Question question) {
        Question newQuestion = new Question();

        question.setSubject(question.getSubject());
        question.setContent(question.getContent());
        question.setCreatedAt(LocalDateTime.now());
        question.setModifiedAt(LocalDateTime.now());

        this.questionRepository.save(newQuestion);

        return question;
    }
}

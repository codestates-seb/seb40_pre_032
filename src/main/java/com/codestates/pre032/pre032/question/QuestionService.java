package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

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

    public Question update(Long id, Question question) {
        Question updateQuestion = find(id);

        updateQuestion.setSubject(question.getSubject());
        updateQuestion.setContent(question.getContent());
        updateQuestion.setCreatedAt(LocalDateTime.now());
        updateQuestion.setModifiedAt(LocalDateTime.now());

        this.questionRepository.save(updateQuestion);

        return question;
    }

    public Question find(Long id) {
        Optional<Question> findQuestion = this.questionRepository.findById(id);
        if (findQuestion.isPresent()) {
            return findQuestion.get();
        } else {
            throw new DataNotFoundException("question not found");
        }
    }
}

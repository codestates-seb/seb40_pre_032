package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.tag.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    private final TagService tagService;

    public QuestionService(QuestionRepository questionRepository, TagService tagService) {
        this.questionRepository = questionRepository;
        this.tagService = tagService;
    }

    public Question create(Question question, List<String> tags) {
        question.setScore(0);
        question.setViewCount(0);
        question.setAnswerCount(0);
        question.setAnswered(false);
        question.setCreationDate(LocalDateTime.now());
        question.setModifiedAt(LocalDateTime.now());
        tagService.stringToTag(question, tags);
        //todo : user 정보 입력

        return this.questionRepository.save(question);
    }

    public Question update(Long id, QuestionDto.Patch patch) {
        Question updateQuestion = find(id);

        updateQuestion.setTitle(patch.getTitle());
        updateQuestion.setQuestionContent(patch.questionContent);
        updateQuestion.setModifiedAt(LocalDateTime.now());

        return this.questionRepository.save(updateQuestion);
    }

    public Question find(Long id) {
        Optional<Question> findQuestion = this.questionRepository.findById(id);
        if (findQuestion.isPresent()) {
            return findQuestion.get();
        } else {
            throw new DataNotFoundException("question not found");
        }
    }

    public List<Question> getQuestions() {
        return this.questionRepository.findAll();
    }


    public void delete(Long id, String accessToken) {
        Optional<Question> findQuestion = this.questionRepository.findById(id);
        if (findQuestion.isPresent()) {
            this.questionRepository.deleteById(id);
        } else {
            throw new DataNotFoundException("question not found");
        }
    }


    //테스트용 메서드 모든 질문 삭제
    public void deleteAll() {
        this.questionRepository.deleteAll();
    }
}

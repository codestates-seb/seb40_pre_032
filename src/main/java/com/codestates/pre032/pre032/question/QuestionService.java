package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.tag.*;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
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
        tagService.stringToTag(question,tags);
        //todo : user 정보 입력

        return this.questionRepository.save(question);
    }

    public Question update(Long id, QuestionDto.Patch patch) {
        Question updateQuestion = find(id);

        //todo : 일단은 내용수정만 구현하기로 합의
//        updateQuestion.setTitle(question.getTitle());
        updateQuestion.setQuestionContent(patch.getQuestionContent());
        updateQuestion.setModifiedAt(LocalDateTime.now());

        this.questionRepository.save(updateQuestion);

        return updateQuestion;
    }

    public Question find(Long id) {
        Optional<Question> findQuestion = this.questionRepository.findById(id);
        if (findQuestion.isPresent()) {
            return findQuestion.get();
        } else {
            throw new DataNotFoundException("question not found");
        }
    }

    public List<Question> getQuestionsByDate(){
        // size 페이지네이션 사이즈
        List<Sort.Order> sorts = new ArrayList<>();
        sorts.add(Sort.Order.desc("createdAt"));
        return this.questionRepository.findAll(Sort.by(sorts));
    }


    public void delete(Long id){
        Optional<Question> findQuestion = this.questionRepository.findById(id);
        if (findQuestion.isPresent()) {
            this.questionRepository.deleteById(id);
        } else {
            throw new DataNotFoundException("question not found");
        }
    }


    //테스트용 메서드 모든 질문 삭제
    public void deleteAll(){
        this.questionRepository.deleteAll();
    }
}
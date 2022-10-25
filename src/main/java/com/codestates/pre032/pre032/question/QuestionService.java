package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question create(Question question) {
        Question newQuestion = new Question(
                question.getSubject(),
                question.getContent()
        );

        newQuestion.setCreatedAt(LocalDateTime.now());
        newQuestion.setModifiedAt(LocalDateTime.now());
        //todo : user 정보 입력

        return this.questionRepository.save(newQuestion);
    }

    public Question update(Long id, Question question) {
        Question updateQuestion = find(id);

        updateQuestion.setSubject(question.getSubject());
        updateQuestion.setContent(question.getContent());
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

    public Page<Question> getQuestions(int page){
        // size 페이지네이션 사이즈
        int size = 10;
        List<Sort.Order> sorts = new ArrayList<>();
        sorts.add(Sort.Order.desc("createdAt"));
        Pageable pageable = PageRequest.of(page, size, Sort.by(sorts));
        return this.questionRepository.findAll(pageable);
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

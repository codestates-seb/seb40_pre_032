package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.tag.*;
import com.codestates.pre032.pre032.user.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    private final UserService userService;
    private final TagService tagService;

    public QuestionService(QuestionRepository questionRepository, UserService userService, TagService tagService) {
        this.questionRepository = questionRepository;
        this.userService = userService;

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

    public Question getDetail(Long id) {
        Question question = find(id);
        // 일단 상세페이지 접속마다 1씩 증가하게 설정
        question.setViewCount(question.getViewCount() + 1);
        return this.questionRepository.save(question);
    }

    public Question find(Long id) {
        Optional<Question> findQuestion = this.questionRepository.findById(id);
        if (findQuestion.isPresent()) {
            return findQuestion.get();
        } else {
            throw new DataNotFoundException("question not found");
        }
    }

    //Viewcount 내림차순 정렬
    public List<Question> sortCount(){
        List<Question> answer = this.questionRepository.sortViewCount();
        return answer;
    }
    //답변 없는 질문 조회
    public List<Question> selectUnanswer(){
        List<Question> answer = this.questionRepository.selectUnanswered();
        return answer;
    }
    //추천 수 기준 정렬
    public List<Question>  sortScore(){
        List<Question> answer = this.questionRepository.sortScore();
        return answer;
    }

    //todo: 검색기능
    public List<Question> search(String text) {
        // text가 전부 일치하는 결과 담기
        List<Question> answer = this.questionRepository.findByQuestionContentContaining(text);


        // 날짜순으로 정렬
        Collections.sort(answer, new Comparator<Question>() {
            @Override
            public int compare(Question q1, Question q2) {
                return q2.getCreationDate().compareTo(q1.getCreationDate());
            }
        });

        // text를 쪼갠 검색 결과 추가
        List<Question> tempAnswer = new ArrayList<>();
        String[] keywords = text.split(" ");
        for (int i = 0; i < keywords.length; i++) {
            for (int j = keywords.length - 1; j >= i; j--) {
                String temp = keywords[i];
                for (int c = i + 1; c < j; c++) {
                    temp += " " + keywords[c];
                }
                answer = sumQuestions(tempAnswer, this.questionRepository.findByQuestionContentContaining(temp));
            }
        }
        // 날짜순으로 정렬
        Collections.sort(tempAnswer, new Comparator<Question>() {
            @Override
            public int compare(Question q1, Question q2) {
                return q2.getCreationDate().compareTo(q1.getCreationDate());
            }
        });
        answer = sumQuestions(answer, tempAnswer);

        return answer;
    }

    public List<Question> sumQuestions(List<Question> questionList1, List<Question> questionList2) {
        for (int i = 0; i < questionList2.size(); i++) {
            if (!questionList1.contains(questionList2.get(i))) {
                questionList1.add(questionList2.get(i));
            }
        }
        return questionList1;
    }

    public List<Question> getQuestions() {
        return this.questionRepository.findAll();
    }

    public List<Question> getQuestionsByTag(String tag) {
        return this.tagService.findQuestionsTagByString(tag);
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

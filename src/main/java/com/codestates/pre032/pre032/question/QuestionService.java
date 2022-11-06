package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.tag.Tag;
import com.codestates.pre032.pre032.tag.TagService;
import com.codestates.pre032.pre032.user.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final TagService tagService;


    public QuestionService(QuestionRepository questionRepository, TagService tagService) {
        this.questionRepository = questionRepository;
        this.tagService = tagService;
    }

    public Question create(Question question, List<String> tags, User user) {
        question.setScore(0);
        question.setViewCount(0);
        question.setAnswerCount(0);
        question.setAnswered(false);
        question.setCreationDate(LocalDateTime.now());
        question.setModifiedAt(LocalDateTime.now());
        List<Tag> tagList = tagService.stringToTags(question, tags);
        question.setUser(user);
        question.setTags(tagList);

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
    public List<Question> sortCount() {
        List<Question> answer = this.questionRepository.sortViewCount();
        return answer;
    }

    //답변 없는 질문 조회
    public List<Question> selectUnanswer() {
        List<Question> answer = this.questionRepository.selectUnanswered();
        return answer;
    }

    //추천 수 기준 정렬
    public List<Question> sortScore() {
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

    // 검색기능에 병합되는 메서드 (검색결과를 합친다).
    public List<Question> sumQuestions(List<Question> questionList1, List<Question> questionList2) {
        for (int i = 0; i < questionList2.size(); i++) {
            if (!questionList1.contains(questionList2.get(i))) {
                questionList1.add(questionList2.get(i));
            }
        }
        return questionList1;
    }

    // 모든 질문을 날짜순으로
    public List<Question> getQuestions() {
        return this.questionRepository.findAllOrder();
    }

    // 태그 검색 기능
    public List<Question> getQuestionsByTag(String tagStr) {
        Tag tag = this.tagService.stringToTag(tagStr);
        List<Question> questions = tag.getQuestions();
        Collections.sort(questions, new Comparator<Question>() {
            @Override
            public int compare(Question q1, Question q2) {
                return q2.getCreationDate().compareTo(q1.getCreationDate());
            }
        });

        return questions;
    }

    // 삭제
    @Transactional
    public void delete(Long id) {
        Optional<Question> findQuestion = this.questionRepository.findById(id);
        if (findQuestion.isPresent()) {
            this.questionRepository.deleteById(id);
            tagService.deleteTagByQuestion(findQuestion.get());

        } else {
            throw new DataNotFoundException("삭제된 질문입니다");
        }
    }

    public boolean hasQuestion(Long questionId, User user) {
        Question question = questionRepository.findById(questionId).get();
        if (question.getUser() == user) {
            return true;
        }
        return false;
    }

    public Boolean getWriter(Long id, User user) {
        Question question = find(id);
        if (user.getUserId() != null) {
            if (question.getUser() == user) {
                return true;
            }
        }
        return false;
    }

    // 추천 기능
    public void upVote(Question question, User user) {
        question.setScore(question.getScore()+1);
        question.setViewCount(question.getViewCount()-1);
        questionRepository.save(question);
    }

    // 비추천 기능
    public void downVote(Question question, User user) {
        question.setScore(question.getScore()-1);
        question.setViewCount(question.getViewCount()-1);
        questionRepository.save(question);
    }

    // 버그 임시 해결을 위한 조회수 1다운
    public void downViewCount(Question question){
        question.setViewCount(question.getViewCount()-1);
    }
}

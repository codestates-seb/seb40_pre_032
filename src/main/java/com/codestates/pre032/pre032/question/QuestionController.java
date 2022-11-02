package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.answer.AnswerController;
import com.codestates.pre032.pre032.answer.AnswerDto;
import com.codestates.pre032.pre032.dto.MainResponseDto;
import com.codestates.pre032.pre032.tag.QuestionTag;
import com.codestates.pre032.pre032.tag.Tag;
import com.codestates.pre032.pre032.tag.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin()
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    private final AnswerController answerController;

    private final TagService tagService;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, AnswerController answerController, TagService tagService) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.answerController = answerController;
        this.tagService = tagService;
    }

    // 작성 기능
    @PostMapping("/add")
//    @PreAuthorize("isAuthenticated()")
    public ResponseEntity addQuestion(@Validated @RequestBody QuestionDto.Post requestBody) {
        Question question = questionService.create(questionMapper.questionPostDtoToQuestion(requestBody),
                requestBody.getTags(),userDetails);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // 수정 기능
    @PatchMapping("/{questionId}/edit")
    public ResponseEntity updateQuestion(@PathVariable("questionId") Long id,
                                         @RequestBody QuestionDto.Patch requestBody) {
        Question question = questionService.update(id, requestBody);

        return new ResponseEntity(HttpStatus.OK);
    }

    // 질문 상세 페이지
    @GetMapping("/{questionId}")
    public ResponseEntity questionDetail(@PathVariable("questionId") Long id) {
        Question question = questionService.getDetail(id);
        QuestionDto.questionContentResponse response = questionMapper.questionToQuestionContentResponseDto(question);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 전체 질문 조회하기
    @GetMapping("/")
    public ResponseEntity allQuestion() {
        List<Question> questions = this.questionService.getQuestions();

        return new ResponseEntity<>(
                new MainResponseDto(questionMapper.questionsToQuestionContentResponsesDto(questions)), HttpStatus.OK);
    }

    // 질문 삭제 기능
    // todo: accessToken
    @DeleteMapping("/{questionId}/delete")
    public ResponseEntity deleteQuestion(@PathVariable("questionId") Long id) {
        Question question = this.questionService.find(id);
        this.questionService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    // 질문 - 답변기능으로 연동
    @PostMapping("/{id}/answer/add")
    public ResponseEntity addAnswer(@PathVariable Long id,
                                    @RequestBody AnswerDto.PostDto requestBody) {
        answerController.postAnswer(id, requestBody);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    //답변이 없는 질문들
    @GetMapping("/sortByUnanswered")
    public ResponseEntity selectUnanswer(){
        List<Question> questions = questionService.selectUnanswer();
        return new ResponseEntity<>(
                new MainResponseDto(questionMapper.questionsToQuestionContentResponsesDto(questions)), HttpStatus.OK);
    }

    //추천 수 기준으로 정렬
    @GetMapping("/sortByScore")
    public ResponseEntity sortScore(){
        List<Question> questions = questionService.sortScore();
        return new ResponseEntity<>(
                new MainResponseDto(questionMapper.questionsToQuestionContentResponsesDto(questions)), HttpStatus.OK);
    }

    @GetMapping("/sortByViewCount")
    public ResponseEntity sortViewCount(){
        List<Question> questions = questionService.sortCount();
        return new ResponseEntity<>(
                new MainResponseDto(questionMapper.questionsToQuestionContentResponsesDto(questions)), HttpStatus.OK);
    }

//    @GetMapping("/sortByViewCount")
//    public ResponseEntity findTitle(){
//        List<Question> questions = questionService.findTitle("스프링 에러입니다");
//        return new ResponseEntity<>(
//                new MainResponseDto(questionMapper.questionsToQuestionContentResponsesDto(questions)), HttpStatus.OK);
//    }



    // 테스트용 메서드 모든 질문 삭제
    @PostMapping("/deleteAll")
    public ResponseEntity deleteAll() {
        questionService.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

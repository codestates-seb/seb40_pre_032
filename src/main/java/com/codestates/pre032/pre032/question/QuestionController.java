package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.answer.AnswerController;
import com.codestates.pre032.pre032.answer.AnswerDto;
import com.codestates.pre032.pre032.dto.MainResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, AnswerController answerController) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.answerController = answerController;
    }

    // 작성 기능
    @PostMapping("/add")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity addQuestion(@Validated @RequestBody QuestionDto.Post requestBody) {
        Question question = questionService.create(questionMapper.questionPostDtoToQuestion(requestBody),
                requestBody.getTags());
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
    @DeleteMapping("/{id}/delete")
    public ResponseEntity deleteQuestion(@PathVariable Long id,
                                         String accessToken) {
        this.questionService.delete(id, accessToken);

        return new ResponseEntity(HttpStatus.OK);
    }

    // 질문 - 답변기능으로 연동
    @PostMapping("/{id}/answer/add")
    public ResponseEntity addAnswer(@PathVariable Long id,
                                    @RequestBody AnswerDto.Post requestBody) {
        answerController.postAnswer(id, requestBody);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    // 테스트용 메서드 모든 질문 삭제
    @PostMapping("/deleteAll")
    public ResponseEntity deleteAll() {
        questionService.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

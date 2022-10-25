package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.dto.MultiResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    // 작성 기능
    @PostMapping("/ask")
    public ResponseEntity askQuestion(@Validated @RequestBody QuestionDto.Post requestBody){
        Question question = questionService.create(questionMapper.questionPostDtoToQuestion(requestBody));

        QuestionDto.response response = questionMapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<> (response, HttpStatus.CREATED);
    }

//    @GetMapping("/ask")
//    public String askForm(){
//        return "askForm 주소";
//    }

    @GetMapping("/update/{id}")
    public ResponseEntity updateForm(@PathVariable("id") Long id){
        Question question = questionService.find(id);
        QuestionDto.response response = questionMapper.questionToQuestionResponseDto(question);
        return new ResponseEntity<> (response, HttpStatus.OK);
    }

    // 수정 기능
    @PatchMapping("/update/{id}")
    public ResponseEntity updateQuestion(@PathVariable("id") Long id,
                                         @RequestBody QuestionDto.Patch requestBody){
        Question question = questionService.update(id, questionMapper.questionPatchDtoToQuestion(requestBody));

        QuestionDto.response response = questionMapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<> (response, HttpStatus.OK);
    }

    // 한 질문 자세히 보기
    @GetMapping("/{id}")
    public ResponseEntity questionDetail(@PathVariable("id") Long id){
        Question question = questionService.find(id);

        QuestionDto.response response = questionMapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<> (response, HttpStatus.OK);
    }

    // 전체 질문 조회하기
    @GetMapping("/")
    public ResponseEntity allQuestion(@RequestParam(value = "page", defaultValue = "0") int page){
        Page<Question> paging = this.questionService.getQuestions(page);
        List<Question> questions = paging.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDto(questions), paging), HttpStatus.OK);
    }

    // 삭제 기능
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteQuestion(@PathVariable Long id){
        this.questionService.delete(id);

        return new ResponseEntity(HttpStatus.OK);
    }

    // 테스트용 메서드 모든 질문 삭제
    @PostMapping("/deleteAll")
    public ResponseEntity deleteAll(){
        questionService.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

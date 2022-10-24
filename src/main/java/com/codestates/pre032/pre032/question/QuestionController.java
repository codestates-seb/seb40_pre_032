package com.codestates.pre032.pre032.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping("/create")
    public ResponseEntity createQuestion(@RequestBody QuestionDto.Post requestBody){
        Question question = questionService.create(questionMapper.questionPostDtoToQuestion(requestBody));

        QuestionDto.response response = questionMapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<> (response, HttpStatus.CREATED);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity updateQuestion(@PathVariable("id") Long id,
                                         @RequestBody QuestionDto.Patch requestBody){
        Question question = questionService.update(id, questionMapper.questionPatchDtoToQuestion(requestBody));

        QuestionDto.response response = questionMapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<> (response, HttpStatus.OK);
    }

    @GetMapping("/create/{id}")
    public ResponseEntity questionDetail(@PathVariable("id") Long id){
        Question question = questionService.find(id);

        QuestionDto.response response = questionMapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<> (response, HttpStatus.OK);
    }
}

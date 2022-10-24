package com.codestates.pre032.pre032.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping("/create/{id}")
    public ResponseEntity createQuestion(@RequestBody QuestionDto.Post requestBody){
        Question question = questionService.create(questionMapper.questionPostDtoToQuestion(requestBody));

        QuestionDto.response response = questionMapper.questionToQuestionResponseDto(question);

        return new ResponseEntity<> (response, HttpStatus.CREATED);
    }

}

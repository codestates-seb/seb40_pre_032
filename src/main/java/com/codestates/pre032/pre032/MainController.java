package com.codestates.pre032.pre032;

import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.question.QuestionDto;
import com.codestates.pre032.pre032.question.QuestionMapper;
import com.codestates.pre032.pre032.question.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/")
public class MainController {
    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    public MainController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    // 검색 기능
    @GetMapping("/search")
    public ResponseEntity searchQuestion(@RequestParam(value = "q") String q) {
        List<Question> questions = questionService.search(q);

        List<QuestionDto.questionContentResponse> response = this.questionMapper.questionsToQuestionContentResponsesDto(questions);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // Tag 검색 기능
    @GetMapping("/search/tag")
    public ResponseEntity tagQuestion(@RequestParam(value = "tag") String tag) {
        List<Question> questions = questionService.getQuestionsByTag(tag);
        List<QuestionDto.questionResponse> response = this.questionMapper.questionToQuestionResponseDto(questions);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

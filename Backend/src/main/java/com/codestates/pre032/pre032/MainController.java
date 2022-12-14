package com.codestates.pre032.pre032;

import com.codestates.pre032.pre032.dto.MainResponseDto;
import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.question.QuestionDto;
import com.codestates.pre032.pre032.question.QuestionMapper;
import com.codestates.pre032.pre032.question.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;
import java.util.List;

@Controller
@RequestMapping("/")
@CrossOrigin
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
        return new ResponseEntity<>(new MainResponseDto(response), HttpStatus.OK);
    }

    // Tag 검색 기능
    @GetMapping("/search/tag")
    public ResponseEntity tagQuestion(@RequestParam(value = "tag") String tag) {
        List<Question> questions = questionService.getQuestionsByTag(tag);
        List<QuestionDto.questionContentResponse> response = this.questionMapper.questionsToQuestionContentResponsesDto(questions);
        return new ResponseEntity<>(new MainResponseDto(response), HttpStatus.OK);
    }

    // 유저 검색 기능
    @GetMapping("/search/user/{userId}")
    public ResponseEntity userQuestion(@PathVariable("userId") Long userId) {
        List<Question> questions = questionService.getQuestionsByUser(userId);
        List<QuestionDto.questionContentResponse> response = this.questionMapper.questionsToQuestionContentResponsesDto(questions);
        return new ResponseEntity<>(new MainResponseDto(response), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity mainPage() {
        return new ResponseEntity<>("다들 힘냅시다 거의 다왔습니다!", HttpStatus.OK);
    }

}

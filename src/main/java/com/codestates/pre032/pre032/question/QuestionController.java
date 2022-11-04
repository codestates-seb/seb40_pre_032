package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.answer.AnswerController;
import com.codestates.pre032.pre032.dto.MainResponseDto;
import com.codestates.pre032.pre032.exception.UnauthorizedException;
import com.codestates.pre032.pre032.security.dto.TokenDto;
import com.codestates.pre032.pre032.tag.TagService;
import com.codestates.pre032.pre032.user.User;
import com.codestates.pre032.pre032.user.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    private final AnswerController answerController;

    private final UserService userService;

    private final TagService tagService;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, AnswerController answerController, UserService userService, TagService tagService) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.answerController = answerController;
        this.userService = userService;
        this.tagService = tagService;
    }

    // 작성 기능
    @PostMapping("/add")
//    @PreAuthorize("isAuthenticated()")
    public ResponseEntity addQuestion(@Validated @RequestBody QuestionDto.Post requestBody) {
        if (requestBody.getAccessToken()==null){
            throw new UnauthorizedException("로그인이 필요합니다.");
        }

        User user = userService.findByAccessToken(requestBody.getAccessToken());
        System.out.println(user.getEmail());

        Question question = questionService.create(questionMapper.questionPostDtoToQuestion(requestBody),
                requestBody.getTags(),user);
        QuestionDto.Response response = questionMapper.questionToQuestionResponse(question);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    // 수정 페이지 요청
    @GetMapping("/{questionId}/edit")
    public ResponseEntity getUpdatePage(@PathVariable("questionId") Long id,@RequestBody TokenDto requestBody){
        //로그인이 안되어있으면
        if (requestBody.getAccessToken()==null){
            throw new UnauthorizedException("로그인이 필요합니다.");
        }
        // 본인이 작성한 질문이 아니면
        if (!questionService.hasQuestion(id,userService.findByAccessToken(requestBody.getAccessToken()))){
            throw new UnauthorizedException("작성자가 아닙니다.");
        }
        return new ResponseEntity(HttpStatus.OK);
    }
    // 수정 기능
    @PatchMapping("/{questionId}/edit")
    public ResponseEntity updateQuestion(@PathVariable("questionId") Long id,
                                         @RequestBody QuestionDto.Patch requestBody) {
        Question question = questionService.update(id, requestBody);

        return new ResponseEntity(HttpStatus.OK);
    }

    // 질문 상세 페이지
    @PostMapping("/{questionId}")
    public ResponseEntity questionDetail(@PathVariable("questionId") Long id,
                                         @RequestBody TokenDto tokenDto) {
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
    @DeleteMapping("/{questionId}/delete")
    public ResponseEntity deleteQuestion(@PathVariable("questionId") Long id,
                                         @RequestBody TokenDto requestBody) {
        // 본인이 작성한 질문이 아니면
        if (!questionService.hasQuestion(id,userService.findByAccessToken(requestBody.getAccessToken()))){
            throw new UnauthorizedException("작성자가 아닙니다.");
        }
        Question question = this.questionService.find(id);
        this.questionService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
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

    //조회 수 기준으로 정렬
    @GetMapping("/sortByViewCount")
    public ResponseEntity sortViewCount(){
        List<Question> questions = questionService.sortCount();
        return new ResponseEntity<>(
                new MainResponseDto(questionMapper.questionsToQuestionContentResponsesDto(questions)), HttpStatus.OK);
    }

    // 추천기능
//    @PostMapping("{question_id}/upVote")
//    public ResponseEntity upVote(){
//
//    }
}

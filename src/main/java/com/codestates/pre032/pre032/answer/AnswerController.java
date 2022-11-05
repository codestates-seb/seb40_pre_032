package com.codestates.pre032.pre032.answer;


import com.codestates.pre032.pre032.exception.UnauthorizedException;
import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.question.QuestionService;
import com.codestates.pre032.pre032.security.dto.TokenDto;
import com.codestates.pre032.pre032.user.User;
import com.codestates.pre032.pre032.user.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answers")
@Validated
@CrossOrigin
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    private final UserService userService;

    private final QuestionService questionService;

    public AnswerController(AnswerService answerService, AnswerMapper mapper, UserService userService, QuestionService questionService) {
        this.answerService = answerService;
        this.mapper = mapper;
        this.userService = userService;
        this.questionService = questionService;
    }

    // id번의 질문에 답변등록
    @PostMapping("/{id}/add")
    public ResponseEntity addAnswer(@PathVariable Long id,
                                    @RequestBody AnswerDto.Post requestBody) {
        if (requestBody.getAccessToken().equals("")) {
            throw new UnauthorizedException("로그인이 필요합니다.");
        }
        User user = userService.findByAccessToken(requestBody.getAccessToken());
        Answer answer = mapper.answerPostDtoAnswer(requestBody);
        answerService.create(id, answer, user);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    //답변 수정

    @PatchMapping("/{id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch patchDto){

        if (!answerService.hasAnswer(answerId,userService.findByAccessToken(patchDto.getAccessToken()))){
            throw new UnauthorizedException("작성자가 아닙니다.");
        }
        Answer updateAnswer = answerService.updateAnswer(answerId,mapper.answerPatchDtoAnswer(patchDto));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    //질문자가 답변 채택
    @PostMapping("/{id}/accept")
    public ResponseEntity getAccept(@PathVariable("id") @Positive long answerId,
                                    @RequestBody TokenDto tokenDto) {
        if (tokenDto.getAccessToken().equals("")) {
            throw new UnauthorizedException("로그인이 필요합니다.");
        }
        Answer answer = answerService.findById(answerId);
        Question question = answer.getQuestion();
        if (!questionService.hasQuestion(question.getQuestionId(),userService.findByAccessToken(tokenDto.getAccessToken()))){
            throw new UnauthorizedException("작성자가 아닙니다.");
        }

        Answer getAccept = answerService.get(answerId);

        return new ResponseEntity(HttpStatus.OK);

    }

    //질문자가 답변 채택 취소
    @PostMapping("/{id}/accept/undo")
    public ResponseEntity getAcceptUndo(@PathVariable("id") @Positive long answerId,
                                        @RequestBody TokenDto tokenDto){
        if (tokenDto.getAccessToken().equals("")) {
            throw new UnauthorizedException("로그인이 필요합니다.");
        }
        Answer answer = answerService.findById(answerId);
        Question question = answer.getQuestion();
        if (!questionService.hasQuestion(question.getQuestionId(),userService.findByAccessToken(tokenDto.getAccessToken()))){
            throw new UnauthorizedException("작성자가 아닙니다.");
        }
        Answer getAccept = answerService.get(answerId);

        return new ResponseEntity(HttpStatus.OK);
    }


    //답변 삭제
    @DeleteMapping("/{id}/delete")
    public ResponseEntity deleteAnswer(@PathVariable("id") @Positive long answerId,
                                       @RequestBody TokenDto tokenDto){
        if (tokenDto.getAccessToken().equals("")) {
            throw new UnauthorizedException("로그인이 필요합니다.");
        }
        if (!answerService.hasAnswer(answerId,userService.findByAccessToken(tokenDto.getAccessToken()))){
            throw new UnauthorizedException("작성자가 아닙니다.");
        }
        answerService.delete(answerId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

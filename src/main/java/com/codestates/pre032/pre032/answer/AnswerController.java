package com.codestates.pre032.pre032.answer;


import com.codestates.pre032.pre032.question.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    private final QuestionService questionService;

    public AnswerController(AnswerService answerService, AnswerMapper mapper, QuestionService questionService) {
        this.answerService = answerService;
        this.mapper = mapper;
        this.questionService = questionService;
    }

    // 답변 등록
    public void postAnswer(Long questionId,
                                     @Valid @RequestBody AnswerDto.PostDto postDto){
        Answer answer = mapper.answerPostDtoAnswer(postDto);
        answerService.create(questionId, answer);
    }

    //답변 수정

    @PatchMapping("/{id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch patchDto){
        Answer updateAnswer = answerService.update(answerId,mapper.answerPatchDtoAnswer(patchDto));



        return new ResponseEntity<>(HttpStatus.OK);
    }

    //답변 채택
    @GetMapping("/{id}/accept")
    public ResponseEntity getAccept(@PathVariable("id") @Positive long answerId){

        Answer getAccept = answerService.get(answerId);

        return new ResponseEntity(HttpStatus.OK);


    //답변 채택 취소
    @GetMapping("/{id}/accept/undo")
    public ResponseEntity getAcceptUndo(@PathVariable("id") @Positive long answerId){

        Answer getAccept = answerService.get(answerId);

        return new ResponseEntity(HttpStatus.OK);
    }


    //답변 삭제
    @DeleteMapping("/{id}/delete")
    public ResponseEntity deleteAnswer(@PathVariable("id") @Positive long answerId){
        answerService.delete(answerId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

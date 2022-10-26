package com.codestates.pre032.pre032.answer;


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


    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // 답변 등록
    @PostMapping("")
    public ResponseEntity postAnswer(Long questionId,
                                     @Valid @RequestBody AnswerDto.PostDto postDto){
        Answer answer = mapper.answerPostDtoAnswer(postDto);
        Answer response = answerService.createAnswer(questionId, answer);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //답변 수정
    @PatchMapping("/{id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.PatchDto patchDto){
        Answer answer = mapper.answerPatchDtoAnswer(patchDto);
        Answer response = answerService.updateAnswer(answerId,answer);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response),HttpStatus.OK);
    }

    //답변 삭제
    @DeleteMapping("/{id}/delete")
    public ResponseEntity deleteAnswer(@PathVariable("id") @Positive long answerId){
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

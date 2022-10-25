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

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.PostDto postDto){
        Answer answer = mapper.answerPostDtoAnswer(postDto);
        Answer response = answerService.createAnswer(answer);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    @PatchMapping("/{id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.PatchDto patchDto){
        Answer answer = mapper.answerPatchDtoAnswer(patchDto);
        Answer response = answerService.updateAnswer(answerId,answer);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response),HttpStatus.OK);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity deleteAnswer(@PathVariable("id") long answerId){
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

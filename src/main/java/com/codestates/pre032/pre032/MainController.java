package com.codestates.pre032.pre032;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {
    @GetMapping("/home")
    public ResponseEntity Home(){
        //홈버튼을 누르면 questions로 이동
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity users(){

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/tag")
    public ResponseEntity tag(){

        return new ResponseEntity(HttpStatus.OK);
    }

}

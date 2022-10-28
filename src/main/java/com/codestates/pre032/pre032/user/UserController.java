package com.codestates.pre032.pre032.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity signup(@Validated @RequestBody UserDto.signUp dto){
        userService.create(dto);

        return new ResponseEntity(HttpStatus.CREATED);
    }
    // 로그인 기능
    @PostMapping("/login")
    public ResponseEntity login(){

        return new ResponseEntity(HttpStatus.OK);
    }

//    @GetMapping("{user_id}/myPage")
//    public ResponseEntity getMyPage(@PathVariable Long id){
//
//        return new ResponseEntity<>(, HttpStatus.OK)
//    }
//    // 요청 거부
//    @GetMapping("/access-denied")
//    public String accessDenied() {
//        return "access-denied";
//    }


}

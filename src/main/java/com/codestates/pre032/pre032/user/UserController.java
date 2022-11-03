package com.codestates.pre032.pre032.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

@Controller
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }
    @GetMapping("/get")
    public ResponseEntity get(@Validated @RequestBody String accessToken){
        User user = userService.findByAccessToken(accessToken);

        return new ResponseEntity(userMapper.userToUserResponseDto(user), HttpStatus.OK);
    }
    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity signup(@Validated @RequestBody UserDto.signUp dto) {
        userService.create(dto);

        return new ResponseEntity(HttpStatus.CREATED);
    }
    // 로그인 기능

    @GetMapping("{user_id}/myPage")
    public ResponseEntity getMyPage(@PathVariable Long id) {
        User user = this.userService.find(id);
        UserDto.response response = this.userMapper.userToUserResponseDto(user);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //    // 요청 거부
//    @GetMapping("/access-denied")
//    public String accessDenied() {
//        return "access-denied";
//    }


}

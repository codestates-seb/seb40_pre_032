package com.codestates.pre032.pre032.security.github;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

@RestController
public class LoginController {
    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/login/oauth2/code/github/")
    public ResponseEntity<String> githubLogin(@PathParam("code") String code, HttpServletResponse response) {
        GithubToken githubToken = loginService.getAccessToken(code);
        response.setHeader("Authorization", githubToken.getAuthorizationValue());
        loginService.getUserName(githubToken.getAccessToken());

        return ResponseEntity.ok("logined");
    }

//    @GetMapping("/login/oauth2/code/github/")
//    public ResponseEntity<String> githubLogin(@PathParam("code") String code, HttpServletResponse response) {
//        GithubToken githubToken = loginService.getAccessToken(code);
//        response.setHeader("Authorization", githubToken.getAuthorizationValue());
//        System.out.println(githubToken.getAccessToken());
//        System.out.println(loginService.getUserName(githubToken.getAccessToken()));
//
//        return ResponseEntity.ok("logined");
//    }

}
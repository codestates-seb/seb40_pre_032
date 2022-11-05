package com.codestates.pre032.pre032.security.github;

import com.codestates.pre032.pre032.security.jwt.JwtTokenizer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;
import java.io.IOException;

@RestController
@CrossOrigin
public class LoginController {
    private final LoginService loginService;

    private final JwtTokenizer jwtTokenizer;

    public LoginController(LoginService loginService, JwtTokenizer jwtTokenizer) {
        this.loginService = loginService;
        this.jwtTokenizer = jwtTokenizer;
    }

    @GetMapping("/login/oauth2/code/github/")
    public void githubLogin(@PathParam("code") String code, HttpServletResponse response) throws IOException {
        GithubToken githubToken = loginService.getAccessToken(code);
//        response.setHeader("AccessToken", githubToken.getAuthorizationValue());

        String accessToken  = loginService.getLogin(githubToken.getAccessToken());

        //todo: 배포시 변경
        response.sendRedirect("http://pre-032-bucket.s3-website.ap-northeast-2.amazonaws.com/callback/access_token=bearer "+accessToken);
//        response.sendRedirect("http://localhost:3000//callback/access_token=bearer "+accessToken);
    }
}
package com.codestates.pre032.pre032.security.handler;

import com.codestates.pre032.pre032.security.jwt.JwtTokenizer;
import com.codestates.pre032.pre032.user.User;
import com.codestates.pre032.pre032.user.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;

    private final UserService userService;

    public OAuth2SuccessHandler(JwtTokenizer jwtTokenizer,UserService userService) {
        this.jwtTokenizer = jwtTokenizer;
        this.userService = userService;
    }


    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User) authentication.getPrincipal();

        System.out.println(oAuth2User.getAttributes().get("response"));
        String sub = "";
        String email = "";
        String displayName = "";
        String profileImage= "";

        if (oAuth2User.getAttributes().containsKey("response")){
            String temp = oAuth2User.getAttributes().get("response").toString().replaceAll("\\{","").replaceAll("}","").replaceAll(", ","=");
            String[] tempArr = temp.split("=");
            for (int i = 0; i < tempArr.length; i++) {
                if (tempArr[i].equals("id")){
                    sub = tempArr[i+1];
                }else if (tempArr[i].equals("email")){
                    email = tempArr[i + 1];
                } else if (tempArr[i].equals("name")) {
                    displayName = tempArr[i+1];
                } else if (tempArr[i].equals("profile_image")){
                    profileImage = tempArr[i+1];
                }
            }
        }else {
            sub = String.valueOf(oAuth2User.getAttributes().get("sub"));
            email = String.valueOf(oAuth2User.getAttributes().get("email"));
            displayName = String.valueOf(oAuth2User.getAttributes().get("name"));
            profileImage = String.valueOf(oAuth2User.getAttributes().get("picture"));
        }

        if (profileImage.equals(null)) {
            profileImage = "https://bucket-seb40.s3.ap-northeast-2.amazonaws.com/default_profile.png";
        }


        System.out.println(oAuth2User.getAttributes().toString());

        saveUser(sub, email, displayName, profileImage);  // (5)
        redirect(request, response, email);  // (6)
    }

    private void saveUser(String sub, String email, String displayName, String profileImage) {
        User user = userService.findByEmailOrCreate(email);
        if (user == null) {
            user = new User();
            user.setEmail(email);
            user.setDisplayName(displayName);
            user.setProfileImage(profileImage);
            user.setCreationDate(LocalDateTime.now());
            user.setPassword(PasswordEncoderFactories.createDelegatingPasswordEncoder().encode("프리프로젝트032"));
            userService.createUser(user);
        }
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String email) throws IOException {
        String accessToken = delegateAccessToken(email);  // (6-1)

        response.setHeader("AccessToken", "bearer " + accessToken);
//        todo: 배포시에는 아마존으로 수정
//        getRedirectStrategy().sendRedirect(request, response, "http://http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/callback/access_token="+"bearer " + accessToken);   // (6-4)
        getRedirectStrategy().sendRedirect(request, response, "http://localhost:3000/callback/access_token="+"bearer " + accessToken);   // (6-4)
    }

    private String delegateAccessToken(String email) {
        Map<String, Object> claims = new HashMap<>();

        User user = userService.findByEmail(email);

        claims.put("email", user.getEmail());
        claims.put("userId",user.getUserId());

        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }
}
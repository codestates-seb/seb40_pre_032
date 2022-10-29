package com.codestates.pre032.pre032.security.handler;

import com.codestates.pre032.pre032.security.jwt.JwtTokenizer;
import com.codestates.pre032.pre032.user.User;
import com.codestates.pre032.pre032.user.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

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
        String sub = String.valueOf(oAuth2User.getAttributes().get("sub"));
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        String displayName = String.valueOf(oAuth2User.getAttributes().get("name"));
        String profileImage = String.valueOf(oAuth2User.getAttributes().get("picture"));


        System.out.println(oAuth2User.getAttributes().toString());
        saveUser(sub, email, displayName, profileImage);  // (5)
        redirect(request, response, email);  // (6)
    }

    private void saveUser(String sub, String email, String displayName, String profileImage) {
        User user = userService.findByEmailOrCreate(sub+email);
        if (user == null) {
            user = new User();
            user.setEmail(sub+email);
            user.setDisplayName(displayName);
            user.setProfileImage(profileImage);
            user.setCreationDate(LocalDateTime.now());
            user.setPassword(PasswordEncoderFactories.createDelegatingPasswordEncoder().encode("프리프로젝트032"));
            userService.createUser(user);
        }
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String username) throws IOException {
        String accessToken = delegateAccessToken(username);  // (6-1)

        String uri = createURI(accessToken).toString();   // (6-3)
        getRedirectStrategy().sendRedirect(request, response, uri);   // (6-4)
    }

    private String delegateAccessToken(String email) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", email);

        String subject = email;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = "Bearer " + jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private URI createURI(String accessToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost")
//                .port(80)
                .path("/receive-token.html")
                .queryParams(queryParams)
                .build()
                .toUri();
    }

}
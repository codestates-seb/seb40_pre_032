package com.codestates.pre032.pre032.security.github;

import com.codestates.pre032.pre032.user.UserService;
import com.codestates.pre032.pre032.user.Users;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class LoginService {
    private final UserService userService;
    private String url = "https://github.com/login/oauth/access_token";
    private String clientId = "bb0d7862c04e3967a361";
    private String clientSecret = "ed674a520e58843f2ba5d878639163b09fb13434";

    public LoginService(UserService userService) {
        this.userService = userService;
    }

    //client secret 값은 노출되면 안되므로, 서버 환경변수에 해당 값을 등록하여 코드에서 다음과 같이 불러와 사용할 수
    //private String clientSecret = System.getenv("GITHUB_CLIENT_SECRET")

    public GithubToken getAccessToken(String code) {
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        Map<String, String> header = new HashMap<>();
        header.put("Accept", "application/json"); //json 형식으로 응답 받음
        headers.setAll(header);

        MultiValueMap<String, String> requestPayloads = new LinkedMultiValueMap<>();
        Map<String, String> requestPayload = new HashMap<>();
        requestPayload.put("client_id", clientId);
        requestPayload.put("client_secret", clientSecret);
        requestPayload.put("code", code);
        requestPayloads.setAll(requestPayload);

        HttpEntity<?> request = new HttpEntity<>(requestPayloads, headers);
        ResponseEntity<?> response = new RestTemplate().postForEntity(url, request, GithubToken.class); //미리 정의해둔 GithubToken 클래스 형태로 Response Body를 파싱해서 담아서 리턴
        return (GithubToken) response.getBody();
    }

    public void getLogin(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<Void> request = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        OAuthMemberInfoResponse response = restTemplate.exchange("https://api.github.com/user",HttpMethod.GET,request,OAuthMemberInfoResponse.class).getBody();

        String email = response.getEmail();
        if (email.equals(null)){
            email = "github"+ response.getId()+"@github.com";
        }
        String displayName = response.getName();
        String profileImage= response.getProfileImage();
        //todo: 프로필 이미지가 없을 때 기본 이미지 설정 로직
        if (profileImage.equals(null)) {
            profileImage = "https://bucket-seb40.s3.ap-northeast-2.amazonaws.com/default_profile.png";
        }

        Users user = userService.findByEmailOrCreate(email);
        if (user == null) {
            user = new Users();
            user.setEmail(email);
            user.setDisplayName(displayName);
            user.setProfileImage(profileImage);
            user.setCreationDate(LocalDateTime.now());
            user.setPassword(PasswordEncoderFactories.createDelegatingPasswordEncoder().encode("프리프로젝트032"));
            userService.createUser(user);
        }
    }
    @Getter
    @NoArgsConstructor
    static class OAuthMemberInfoResponse {
        @JsonProperty("name")
        private String name;

        @JsonProperty("id")
        private String id;

        @JsonProperty("email")
        private String email;

        @JsonProperty("avatar_url")
        private String profileImage;
    }
}
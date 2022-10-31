package com.codestates.pre032.pre032.security.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class LoginService {
    private String url = "https://github.com/login/oauth/access_token";
    private String clientId = "bb0d7862c04e3967a361";
    private String clientSecret = "ed674a520e58843f2ba5d878639163b09fb13434";

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

    public void getUserName(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<Void> request = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        System.out.println(restTemplate.exchange("https://api.github.com/user",HttpMethod.GET,request,OAuthMemberInfoResponse.class).getBody().getName());
        System.out.println(restTemplate.exchange("https://api.github.com/user",HttpMethod.GET,request,OAuthMemberInfoResponse.class).getBody().getEmail());
        System.out.println(restTemplate.exchange("https://api.github.com/user",HttpMethod.GET,request,OAuthMemberInfoResponse.class).getBody().getProfileImage());
        return ;
    }
    @Getter
    @NoArgsConstructor
    static class OAuthMemberInfoResponse {
        @JsonProperty("name")
        private String name;

        @JsonProperty("email")
        private String email;

        @JsonProperty("avatar_url")
        private String profileImage;
    }

}
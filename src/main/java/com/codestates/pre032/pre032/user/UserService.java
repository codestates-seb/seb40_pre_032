package com.codestates.pre032.pre032.user;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.exception.UnauthorizedException;
import com.codestates.pre032.pre032.exception.UserExistsException;
import com.codestates.pre032.pre032.security.dto.LoginDto;
import com.codestates.pre032.pre032.security.jwt.JwtTokenizer;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    private final JwtTokenizer jwtTokenizer;

    private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    public UserService(UserRepository userRepository, JwtTokenizer jwtTokenizer) {
        this.userRepository = userRepository;
        this.jwtTokenizer = jwtTokenizer;
    }

    public User create(UserDto.signUp dto) {
        verifyExistsEmail(dto.getEmail());

        User user = new User();
        user.setDisplayName(dto.getDisplayName());
        user.setEmail(dto.getEmail());
        user.setProfileImage("https://bucket-seb40.s3.ap-northeast-2.amazonaws.com/default_profile.png");
        String encryptedPassword = passwordEncoder.encode(dto.getPassword());
        user.setPassword(encryptedPassword);
        user.setCreationDate(LocalDateTime.now());

        return this.userRepository.save(user);
    }

    public User createUser(User user) {
        return this.userRepository.save(user);
    }


    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new UserExistsException("이미 등록된 이메일입니다.");
    }

    public User updateUser(User user, UserDto.update dto){
        UserDto.login loginDto = new UserDto.login();
        loginDto.setEmail(dto.getEmail());
        loginDto.setPassword(dto.getPassword());
        if (verifyPassword(loginDto)){
            throw new UnauthorizedException("사용자 정보가 일치하지 않습니다");
        }
        user.setDisplayName(dto.getDisplayName());
        return this.userRepository.save(user);
    }

    public User find(Long id) {
        Optional<User> findUser = this.userRepository.findById(id);
        if (findUser.isPresent()) {
            return findUser.get();
        } else {
            throw new DataNotFoundException("user not found");
        }
    }

    public User findByEmail(String email) {
        Optional<User> findUser = this.userRepository.findByEmail(email);
        if (findUser.isPresent()) {
            return findUser.get();
        } else {
            throw new DataNotFoundException("user not found");
        }
    }

    public User findByEmailOrCreate(String email) {
        Optional<User> findUser = this.userRepository.findByEmail(email);
        if (findUser.isPresent()) {
            return findUser.get();
        } else {
            return null;
        }
    }
    //액세스 토큰으로 사용자 찾기
    public User findByAccessToken(String AccessToken){
        String jws = AccessToken.replace("bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();
        String email = (String) claims.get("email");
        User user = findByEmail(email);
        return user;
    }

    // 사용자 정보가 등록된 액세스토큰 생성
    public String makeAccessToken(UserDto.login dto){
        String accessToken = "";

        if (verifyPassword(dto)){
            Map<String, Object> claims = new HashMap<>();
            claims.put("email", dto.getEmail());
            claims.put("userId",dto.getPassword());

            String subject = dto.getEmail();

            Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

            accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        }else{
            accessToken = null;
        }
        return accessToken;
    }

    public boolean verifyPassword(UserDto.login dto){
        String email = dto.getEmail();
        String password = dto.getPassword();
        User user = findByEmail(email);

        if (passwordEncoder.matches(password, user.getPassword())){
            return true;
        }
        return false;
    }
}

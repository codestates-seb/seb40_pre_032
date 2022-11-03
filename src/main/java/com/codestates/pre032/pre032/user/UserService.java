package com.codestates.pre032.pre032.user;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.exception.UserExistsException;
import com.codestates.pre032.pre032.security.jwt.JwtTokenizer;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    private final JwtTokenizer jwtTokenizer;

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
        String encryptedPassword = PasswordEncoderFactories.createDelegatingPasswordEncoder().encode(dto.getPassword());
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

    public User findByAccessToken(String AccessToken){
        String jws = AccessToken.replace("bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();
        String email = (String) claims.get("email");
        User user = findByEmail(email);
        return user;
    }
}

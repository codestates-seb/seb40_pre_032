package com.codestates.pre032.pre032.user;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.exception.UserExistsException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Users create(UserDto.signUp dto) {
        verifyExistsEmail(dto.getEmail());
        Users user = new Users();
        user.setDisplayName(dto.getDisplayName());
        user.setEmail(dto.getEmail());
        user.setProfileImage("https://bucket-seb40.s3.ap-northeast-2.amazonaws.com/default_profile.png");
        String encryptedPassword = PasswordEncoderFactories.createDelegatingPasswordEncoder().encode(dto.getPassword());
        user.setPassword(encryptedPassword);

        user.setCreationDate(LocalDateTime.now());
        return this.userRepository.save(user);
    }

    public Users createUser(Users user) {
        return this.userRepository.save(user);
    }


    private void verifyExistsEmail(String email) {
        Optional<Users> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new UserExistsException("이미 등록된 이메일입니다.");
    }

    public Users find(Long id) {
        Optional<Users> findUser = this.userRepository.findById(id);
        if (findUser.isPresent()) {
            return findUser.get();
        } else {
            throw new DataNotFoundException("user not found");
        }
    }

    public Users findByEmail(String email) {
        Optional<Users> findUser = this.userRepository.findByEmail(email);
        if (findUser.isPresent()) {
            return findUser.get();
        } else {
            throw new DataNotFoundException("user not found");
        }
    }

    public Users findByEmailOrCreate(String email) {
        Optional<Users> findUser = this.userRepository.findByEmail(email);
        if (findUser.isPresent()) {
            return findUser.get();
        } else {
            return null;
        }
    }
}

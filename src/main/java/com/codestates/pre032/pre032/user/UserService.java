package com.codestates.pre032.pre032.user;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(UserDto.signUp dto){
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setCreationDate(LocalDateTime.now());
        //자동생성
//        user.seDisplayName();
        return this.userRepository.save(user);
    }
}

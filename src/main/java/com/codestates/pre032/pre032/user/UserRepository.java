package com.codestates.pre032.pre032.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {
   Optional<Users> findByEmail(String Email);

   //finBy: 규칙 -> Username: 문법
   // select * from user where username = ?

   //    jpa 네임쿼리 메서드 예시
    // select * from user where email = ?
//    public User findByEmail();
}

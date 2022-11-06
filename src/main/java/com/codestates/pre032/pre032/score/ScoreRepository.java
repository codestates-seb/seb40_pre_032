package com.codestates.pre032.pre032.score;

import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ScoreRepository extends JpaRepository<Score,Long> {
//    @Query("select s from Score s where s.user_id = :userId and s.question_id = :questionId " )
//    Optional<Score> findByUserAndQuestion(@Param(value = "userId")Long userId,
//                                         @Param(value = "questionId")Long questionId);
    Optional<Score> findByUserAndQuestion(User user, Question question);
}

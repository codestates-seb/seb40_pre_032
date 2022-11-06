package com.codestates.pre032.pre032.score;

import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.user.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ScoreService {
    private final ScoreRepository scoreRepository;

    public ScoreService(ScoreRepository scoreRepository) {
        this.scoreRepository = scoreRepository;
    }

    public Score findByUserAndQuestion(User user, Question question) {
        Optional<Score> score =
                this.scoreRepository.findByUserAndQuestion(user, question);
        if (score.isPresent()) {
            return score.get();
        } else {
            return new Score();
        }
    }
    public void saveScore(Score score){
        this.scoreRepository.save(score);
    }
}

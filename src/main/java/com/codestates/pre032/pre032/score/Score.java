package com.codestates.pre032.pre032.score;

import com.codestates.pre032.pre032.answer.Answer;
import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scoreId;

    @ManyToOne
    @JoinColumn(name = "question")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "answer")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "user")
    private User user;

    @Column
    private int status = 0;
}

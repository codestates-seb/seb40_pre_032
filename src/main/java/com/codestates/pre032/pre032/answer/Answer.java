package com.codestates.pre032.pre032.answer;


import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.user.Users;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, columnDefinition = "Text")
    private String answerContent;

    @ManyToOne
    @JoinColumn(name="question_questionId")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "user_userId")
    private Users user;

    @Column
    private boolean isAccepted;

    @Column
    private int score;

    @Column(nullable = false)
    private LocalDateTime creationDate = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

}

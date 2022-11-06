package com.codestates.pre032.pre032.answer;


import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.score.Score;
import com.codestates.pre032.pre032.user.User;
import com.codestates.pre032.pre032.user.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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
    @JoinColumn(name="question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private boolean isAccepted;

    @Column
    private int score;

    @Column(nullable = false)
    private LocalDateTime creationDate = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "answer")
    private List<Score> likeUsers;

    public UserDto.owner getOwnerDto(){
        User user = this.user;
        UserDto.owner owner = new UserDto.owner(user.getUserId(), user.getDisplayName(), user.getProfileImage());
        return owner;
    }
}

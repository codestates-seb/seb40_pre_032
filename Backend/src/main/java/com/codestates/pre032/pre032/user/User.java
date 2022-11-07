package com.codestates.pre032.pre032.user;

import com.codestates.pre032.pre032.answer.Answer;
import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.score.Score;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {
    public User(String email, String password, String displayName, String profileImage, LocalDateTime creationDate, String provider, String providerId) {
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.profileImage = profileImage;
        this.creationDate = creationDate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false)
    @Email
    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    @Column
    private String displayName;

    @Column
    private String profileImage;

    @Column
    private LocalDateTime creationDate;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Answer> answers;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Score> likeUsers;
}

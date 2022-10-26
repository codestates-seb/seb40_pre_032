package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.tag.QuestionTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Question {
    public Question(String title, String questionContent, List<QuestionTag> tags) {
        this.title = title;
        this.questionContent = questionContent;
        this.tags = tags;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String questionContent;

    @Column(nullable = false)
    private String accessToken;

    @Column
    private int score;

    @Column
    private int viewCount;

    @Column
    private boolean isAnswered;

    @Column
    private LocalDateTime creationDate;
    @Column
    private LocalDateTime modifiedAt;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<QuestionTag> tags = new ArrayList<>();

    // todo: answer 연관관계 설정
//    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
//    private List<Answer> answers;

    @Column
    private int answerCount;

    public List<String> getTags() {
        List<String> tags = new ArrayList<>();
        for (int i = 0; i < this.tags.size(); i++) {
            tags.add(this.tags.get(i).getTag().getTag());
        }
        return tags;
    }
}

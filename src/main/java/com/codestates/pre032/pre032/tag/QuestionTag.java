package com.codestates.pre032.pre032.tag;

import com.codestates.pre032.pre032.question.Question;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class QuestionTag {
    public QuestionTag(Question question, String tag) {
        this.question = question;
        this.tag = new Tag(tag);
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long QuestionTagId;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

}

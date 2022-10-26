package com.codestates.pre032.pre032.tag;

import com.codestates.pre032.pre032.question.Question;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class QuestionTag {
    public QuestionTag(Question question, String tag) {
        this.question = question;
        this.tag = new Tag(tag);
    }

    public QuestionTag(Question question) {
        this.question = question;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long QuestionTagId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "QUESTION_ID")
    @JsonBackReference
    private Question question;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "TAG_ID")
    @JsonBackReference
    private Tag tag;

}

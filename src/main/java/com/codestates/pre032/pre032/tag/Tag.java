package com.codestates.pre032.pre032.tag;

import com.codestates.pre032.pre032.question.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Tag {
    public Tag(String tag,Question question) {
        this.tag = tag;
        this.questions.add(question);
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column
    private String tag;

    @ManyToMany(mappedBy = "tags")
    private List<Question> questions = new ArrayList<>();
}

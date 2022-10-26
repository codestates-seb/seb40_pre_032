package com.codestates.pre032.pre032.tag;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
    List<QuestionTag> findAllByTag(Tag tag);
}

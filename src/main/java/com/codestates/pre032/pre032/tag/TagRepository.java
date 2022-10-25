package com.codestates.pre032.pre032.tag;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Integer countByTag(String tag);
    Tag findByTag(String tag);
}

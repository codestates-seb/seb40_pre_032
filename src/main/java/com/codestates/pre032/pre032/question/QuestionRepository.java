package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.tag.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;
import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Integer countByTags(Tag tag);
    
    @Query("select q from Question q order by q.creationDate desc" )
    List<Question> findAllOrder();

    //완전히 일치
//    @Query("select case q.title = :title when title = :title " +
//            "when q.title <> :title then like %:title" +
//            "when q.title <> :title then like %:title% " +
//            "when q.title <> :title then like :title%" +
//            "end" +
//            "form question q")
//    List<Question> findTitle(@Param("title") String title);

//    //완전히 일치
//    @Query("select q from Question q where q.title = :title order by q.creationDate desc" )
//    List<Question> selectTitle(@Param("title") String title);
//    //검색 내용을 포함, 날짜순으로 내림차순
//    @Query("select q from Question q where q.title like %:title% order by q.creationDate desc" )
//    List<Question> findByTitle(@Param("title") String title);

    //viewCount 내림차순 정렬
    @Query("select q from Question q order by q.viewCount desc" )
    List<Question> sortViewCount();

    //답변 없는 질문들 조회
    @Query("select q from Question q where q.isAnswered = 0 " )
    List<Question> selectUnanswered();

    //추천 수 기준 정렬
    @Query("select q from Question q order by q.score desc" )
    List<Question> sortScore();


    List<Question> findByQuestionContentContaining(String keyword);
}

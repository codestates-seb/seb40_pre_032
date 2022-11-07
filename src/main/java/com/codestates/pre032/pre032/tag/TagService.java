package com.codestates.pre032.pre032.tag;

import com.codestates.pre032.pre032.question.Question;
import com.codestates.pre032.pre032.question.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TagService {

    private final QuestionRepository questionRepository;
    private final TagRepository tagRepository;

    public TagService(QuestionRepository questionRepository, TagRepository tagRepository) {
        this.questionRepository = questionRepository;
        this.tagRepository = tagRepository;
    }

    // 입력받은 스트링을 태그로 변환하고 데이터베이스에 저장
    public List<Tag> stringToTags(Question question, List<String> tagList) {
        List<Tag> tags = new ArrayList<>();
        for (String tagStr : tagList) {
            Tag tag = new Tag();
            if (this.tagRepository.countByTag(tagStr) == 0) {
                tag = new Tag(tagStr, question);
                this.tagRepository.save(tag);
            } else {
                tag = tagRepository.findByTag(tagStr);
                List<Question> questions = tag.getQuestions();
                questions.add(question);
                tag.setQuestions(questions);
                this.tagRepository.save(tag);
            }
            tags.add(tag);
        }
        return tags;
    }

    public Tag stringToTag(String tagStr) {
        return tagRepository.findByTag(tagStr);
    }

    public void deleteTagByQuestion(Question question) {
        List<Tag> tags = question.getTags();
        for (int i = 0; i < tags.size(); i++) {
            Tag tag = tags.get(i);
            if (this.questionRepository.countByTags(tag)==0){
                tagRepository.delete(tag);
            }
        }
    }
}

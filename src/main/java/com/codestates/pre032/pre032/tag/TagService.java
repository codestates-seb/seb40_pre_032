package com.codestates.pre032.pre032.tag;

import com.codestates.pre032.pre032.question.Question;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TagService {
    private final QuestionTagRepository questionTagRepository;

    private final TagRepository tagRepository;

    public TagService(QuestionTagRepository questionTagRepository, TagRepository tagRepository) {
        this.questionTagRepository = questionTagRepository;
        this.tagRepository = tagRepository;
    }

    // 입력받은 스트링을 태그로 변환하고 데이터베이스에 저장
    public List<QuestionTag> stringToTag(Question question, List<String> tagList){
        List<QuestionTag> tags = new ArrayList<>();
        for (String tagStr : tagList) {
            if (this.tagRepository.countByTag(tagStr)==0) {
                QuestionTag questionTag = new QuestionTag(question,tagStr);
                tags.add(questionTag);
                this.questionTagRepository.save(questionTag);
            }else{
                QuestionTag questionTag = new QuestionTag(question);
                questionTag.setTag(this.tagRepository.findByTag(tagStr));
                this.questionTagRepository.save(questionTag);
            }
        }
        return tags;
    }

    public List<Question> findQuestionsTagByString(String tagStr){
        List<Question> questions = new ArrayList<>();
        Tag tag = this.tagRepository.findByTag(tagStr);

        List<QuestionTag> questionTags = this.questionTagRepository.findAllByTag(tag);
        for (QuestionTag questionTag : questionTags){
            questions.add(questionTag.getQuestion());
        }
        return questions;
    }
}

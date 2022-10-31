package com.codestates.pre032.pre032.question;

import com.codestates.pre032.pre032.answer.*;
import com.codestates.pre032.pre032.tag.QuestionTag;
import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDateTime;
import java.util.*;

import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(QuestionController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
@WithMockUser
public class QuestionControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private QuestionMapper mapper;

    @MockBean
    private AnswerController controller;

    @MockBean
    private AnswerMapper answerMapper;

    @MockBean
    private AnswerService answerService;

    List<String> tags = new ArrayList<>();

    @Test
    @DisplayName("Question 데이터 post 테스트")
    void postQuestionTest() throws Exception {
        tags.add("스프링");
        tags.add("자바");

        //given
        QuestionDto.Post questionPost = new QuestionDto.Post();
        questionPost.setTitle("spring");
        questionPost.setQuestionContent("봄");
        questionPost.setTags(tags);
        String content = gson.toJson(questionPost);

        QuestionDto.Response questionResponse = new QuestionDto.Response(tags,
                true,
                1,
                1,
                1,
                LocalDateTime.now(),
                LocalDateTime.now(),
                1L,
                "spring",
                "봄");

        given(mapper.questionPostDtoToQuestion(Mockito.any(QuestionDto.Post.class))).willReturn(new Question());
        given(questionService.create(Mockito.any(Question.class), Mockito.anyList())).willReturn(new Question());
        given(mapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(questionResponse);

        //when
        ResultActions actions =
                mockMvc.perform(
                        post("/questions/add")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                                .with(csrf())
                );

        //then
        actions
                .andExpect(status().isCreated())
                .andDo(document(
                        "post-question",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
                                        fieldWithPath("questionContent").type(JsonFieldType.STRING).description("내용"),
                                        fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그")
                                )
                        )
                ));
    }
    @Test
    @DisplayName("Question 데이터 수정 테스트")
    void patchQuestionTest() throws Exception {
        long questionId = 1L;
        tags.add("스프링");
        tags.add("자바");
        //given
        QuestionDto.Patch questionPatch = new QuestionDto.Patch();
        questionPatch.setTitle("스프링");
        questionPatch.setQuestionContent("자바");
        String content = gson.toJson(questionPatch);

        QuestionDto.Response questionResponseDto = new QuestionDto.Response(
                tags,
                true,
                1,
                1,
                1,
                LocalDateTime.now(),
                LocalDateTime.now(),
                1L,
                "java",
                "어렵다");

        given(questionService.update(eq(questionId), Mockito.any(QuestionDto.Patch.class))).willReturn(new Question());
        given(mapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(questionResponseDto);

        //when
        ResultActions actions =
                mockMvc.perform(
                        patch("/questions/{questionId}/edit", questionId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                                .with(csrf())

                );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "patch-question",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("questionId").description("질문 식별자 ID")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목").optional(),
                                        fieldWithPath("questionContent").type(JsonFieldType.STRING).description("내용").optional()

                                )
                        )
                ));
    }

    @Test
    @DisplayName("Answer 데이터 post 테스트")
    void postAnswerTest() throws Exception {
        Long questionId = 1L;

        //given
        AnswerDto.Post answerPost = new AnswerDto.Post();
        answerPost.setAnswerContent("springJava");
        String content = gson.toJson(answerPost);



        //given
        given(answerMapper.answerPostDtoAnswer(Mockito.any(AnswerDto.Post.class))).willReturn(new Answer());
        given(answerService.create(eq(questionId),Mockito.any(Answer.class))).willReturn(new Answer());

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.post("/questions/{id}/answer/add", questionId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                                .with(csrf())
                );

    //then
        actions
                .andExpect(status().isCreated())
                .andDo(document(
                        "post-answer",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("질문 식별자 ID")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("answerContent").type(JsonFieldType.STRING).description("답변 내용")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("question 데이터 상세조회 테스트")
    void getQuestionTest() throws Exception {
        Long questionId = 1L;
        tags.add("스프링");
        tags.add("자바");

        List<AnswerDto.Response> answerResponse = new ArrayList<>();
        answerResponse.add(new AnswerDto.Response(true,1 ,LocalDateTime.now(),1L,"자바",1L));

        //given
        Question question = new Question();
        question.setQuestionId(questionId);
        question.setTitle("스프링");
        question.setQuestionContent("spring");


        List<QuestionDto.questionContentResponse> response = new ArrayList<>();
        response.add(new QuestionDto.questionContentResponse(
                tags,
                true,
                1,
                1,
                1,
                LocalDateTime.now(),
                LocalDateTime.now(),
                1L,
                "스프링",
                "spring",
                answerResponse
        ));

        //given
        given(questionService.getDetail(eq(questionId))).willReturn(question);
        given(mapper.questionsToQuestionContentResponsesDto(Mockito.anyList())).willReturn(response);
//        given(mapper.answerToAnswerResponseDto(Mockito.any(Answer.class))).willReturn(answerResponseDto);

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/questions/{questionId}", questionId)
                                .accept(MediaType.APPLICATION_JSON)
                                .with(csrf())
                );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-question",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("questionId").description("질문 식별자 ID")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath(".answered").type(JsonFieldType.BOOLEAN).description("질문 답변 여부"),
                                        fieldWithPath(".viewCount").type(JsonFieldType.NUMBER).description("질문 조회수"),
                                        fieldWithPath(".answerCount").type(JsonFieldType.NUMBER).description("질문 답변수"),
                                        fieldWithPath(".score").type(JsonFieldType.NUMBER).description("질문 추천수"),
                                        fieldWithPath(".creationDate").type(JsonFieldType.STRING).description("질문 생성일자"),
                                        fieldWithPath(".questionId").type(JsonFieldType.NUMBER).description("질문Id"),
                                        fieldWithPath(".questionContent").type(JsonFieldType.STRING).description("질문 내용"),
                                        fieldWithPath(".title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath(".accessToken").type(JsonFieldType.STRING).description("액세스 토큰")
                                )
                        )
                ));
    }

    @Test
    @DisplayName("question 데이터 전체조회 테스트")
    void getQuestionsTest() throws Exception {
        Long questionId = 1L;
        tags.add("스프링");
        tags.add("자바");

        List<AnswerDto.Response> answerResponse = new ArrayList<>();
        answerResponse.add(new AnswerDto.Response(true,1 ,LocalDateTime.now(),1L,"자바",1L));

        //given
        Question question = new Question();
        question.setQuestionId(questionId);
        question.setTitle("스프링");
        question.setQuestionContent("spring");


        List<QuestionDto.questionContentResponse> response = new ArrayList<>();
        response.add(new QuestionDto.questionContentResponse(
                tags,
                true,
                1,
                1,
                1,
                LocalDateTime.now(),
                LocalDateTime.now(),
                1L,
                "스프링",
                "spring",
                answerResponse
        ));

        //given
        given(questionService.getDetail(eq(questionId))).willReturn(question);
        given(mapper.questionsToQuestionContentResponsesDto(Mockito.anyList())).willReturn(response);
//        given(mapper.answerToAnswerResponseDto(Mockito.any(Answer.class))).willReturn(answerResponseDto);

        //when
        ResultActions actions =
                mockMvc.perform(
                        MockMvcRequestBuilders.get("/questions/{questionId}", questionId)
                                .accept(MediaType.APPLICATION_JSON)
                                .with(csrf())
                );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-question",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("questionId").description("질문 식별자 ID")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath(".answered").type(JsonFieldType.BOOLEAN).description("질문 답변 여부"),
                                        fieldWithPath(".viewCount").type(JsonFieldType.NUMBER).description("질문 조회수"),
                                        fieldWithPath(".answerCount").type(JsonFieldType.NUMBER).description("질문 답변수"),
                                        fieldWithPath(".score").type(JsonFieldType.NUMBER).description("질문 추천수"),
                                        fieldWithPath(".creationDate").type(JsonFieldType.STRING).description("질문 생성일자"),
                                        fieldWithPath(".questionId").type(JsonFieldType.NUMBER).description("질문Id"),
                                        fieldWithPath(".questionContent").type(JsonFieldType.STRING).description("질문 내용"),
                                        fieldWithPath(".title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath(".accessToken").type(JsonFieldType.STRING).description("액세스 토큰")
                                )
                        )
                ));
    }


    @Test
    @DisplayName("Question 데이터 삭제 테스트")
    void deleteQuestionTest() throws Exception {

        //given
        long questionId = 1L;
        doNothing().when(questionService).delete(Mockito.anyLong(), Mockito.anyString());

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.delete("/questions/{questionId}/delete", questionId)
                                .with(csrf())
                );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "delete-qeustion",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("questionId").description("질문 식별자 ID")
                        )
                ));
    }
}
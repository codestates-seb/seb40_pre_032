package com.codestates.pre032.pre032.answer;

import com.codestates.pre032.pre032.question.QuestionService;
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
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.time.LocalDateTime;
import java.util.List;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AnswerController.class) //대상 클래스만 로드해 테스트를 수행
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
@WithMockUser
public class AnswerControllerTest {

    @Autowired
    private MockMvc mockMvc; // answercontroller 관련 빈만 로드

    @Autowired
    private Gson gson;

    @MockBean
    private AnswerService answerService;

    @MockBean
    private AnswerMapper mapper;

    @MockBean
    private QuestionService questionService;

    private UserDetails createUserDetails() {
        return null;
    }


    @Test
    @DisplayName("Answer 데이터 수정 테스트")

    @WithMockUser
//    @WithAnonymousUser
    void patchAnswerTest() throws Exception {
        long answerId = 1L;
        //given
        AnswerDto.Patch answerPatch = new AnswerDto.Patch();
        answerPatch.setAnswerContent("ㅇㅇㅇㅇㅇ");
        String content = gson.toJson(answerPatch);


        given(mapper.answerPatchDtoAnswer(Mockito.any(AnswerDto.Patch.class))).willReturn(new Answer());
        given(answerService.update(eq(answerId),Mockito.any(Answer.class))).willReturn(new Answer());
//        given(mapper.answerToAnswerResponseDto(Mockito.any(Answer.class))).willReturn(answerResponseDto);

        //when
        ResultActions actions =
                mockMvc.perform(
                        patch("/answers/{answerId}/edit",answerId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                                .with(csrf())
                );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "patch-answer",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("answerId").description("답변 식별자 ID")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("answerContent").type(JsonFieldType.STRING).description("답변 본문")
                               )
                        )
                ));
    }

    @Test
    @DisplayName("Answer 데이터 삭제 테스트")
    void deleteAnswerTest() throws Exception {
        //given
        long answerId = 1L;
        doNothing().when(answerService).delete(Mockito.anyLong());

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.delete("/answers/{id}/delete",answerId)
                                .with(csrf())
                );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "delete-answer",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("답변 식별자 ID")
                        )
                ));
    }
}

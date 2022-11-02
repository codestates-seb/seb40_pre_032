package com.codestates.pre032.pre032.user;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    default UserDto.response userToUserResponseDto(Users user){
        UserDto.response response = new UserDto.response(
                user.getUserId(),
                user.getEmail(),
                user.getDisplayName(),
                user.getProfileImage(),
                user.getCreationDate(),
                user.getQuestions().size(),
                user.getAnswers().size()
        );
        return response;
    }
}

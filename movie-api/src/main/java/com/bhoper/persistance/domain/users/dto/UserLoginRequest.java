package com.bhoper.persistance.domain.users.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserLoginRequest {

    @NotBlank(message = "Username or email is required")
    private String login;
    @NotBlank(message = "Password is required")
    private String password;
}

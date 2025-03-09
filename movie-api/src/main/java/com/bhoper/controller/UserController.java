package com.bhoper.controller;

import com.bhoper.persistance.domain.users.UserEntity;
import com.bhoper.persistance.domain.users.dto.UserLoginRequest;
import com.bhoper.persistance.domain.users.dto.UserRegistrationRequest;
import com.bhoper.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegistrationRequest user) {
        UserEntity userEntity = this.userService.registerUser(user);

        return new ResponseEntity<>("New user was created", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public String login(@RequestBody UserLoginRequest userLoginRequest) {
        return this.userService.login(userLoginRequest);
    }

}

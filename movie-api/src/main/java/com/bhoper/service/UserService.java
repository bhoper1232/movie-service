package com.bhoper.service;

import com.bhoper.config.JwtUtil;
import com.bhoper.persistance.domain.users.UserEntity;
import com.bhoper.persistance.domain.users.dto.UserLoginRequest;
import com.bhoper.persistance.domain.users.dto.UserRegistrationRequest;
import com.bhoper.persistance.domain.users.enums.UserRole;
import com.bhoper.persistance.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final JwtUtil jwtUtil;

    private final AuthenticationManager authenticationManager;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public UserEntity registerUser(UserRegistrationRequest user) {
        UserEntity userEntity = UserEntity.builder()
                .username(user.getUsername())
                .password(this.bCryptPasswordEncoder.encode(user.getPassword()))
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .role(UserRole.USER)
                .build();
        return this.userRepository.save(userEntity);
    }

    public String login(UserLoginRequest userLoginRequest) {

        String login = userLoginRequest.getLogin();
        UserEntity userEntity = isEmail(login)
                ? this.userRepository.findByEmail(login).orElseThrow(() -> new UsernameNotFoundException("User not found with email " + login))
                : this.userRepository.findByUsername(login).orElseThrow(() -> new UsernameNotFoundException("User not found with username " + login));

        Authentication authentication = this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userEntity.getUsername(), userLoginRequest.getPassword())
        );

        if (authentication.isAuthenticated()) {
            return this.jwtUtil.generateToken(userEntity.getUsername());
        }

        throw new UsernameNotFoundException("User not found " + login);
    }

    public boolean isValidToken(String token) {
        return this.jwtUtil.isValidToken(token);
    }

    private boolean isEmail(String input) {
        return EmailValidator.getInstance().isValid(input);
    }
}

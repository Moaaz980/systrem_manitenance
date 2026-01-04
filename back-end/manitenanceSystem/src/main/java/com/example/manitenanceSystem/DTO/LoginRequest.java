package com.example.manitenanceSystem.DTO;

import com.example.manitenanceSystem.Enums.Role;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class LoginRequest {
    private String username;
    private String password;
    private Role role;

    public LoginRequest(String username , String password , Role role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}

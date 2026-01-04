package com.example.manitenanceSystem.DTO;


import com.example.manitenanceSystem.Enums.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {
    private String username;
    private String password;
    private Role role;

    public RegisterRequest(String username , String password , Role role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}

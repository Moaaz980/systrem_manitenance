package com.example.manitenanceSystem.DTO;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponseDTO {
    private String message;

    public LoginResponseDTO(String message) {
        this.message = message;
    }
}

package com.example.manitenanceSystem.Controllers;


import com.example.manitenanceSystem.DTO.LoginRequest;
import com.example.manitenanceSystem.DTO.LoginResponseDTO;
import com.example.manitenanceSystem.DTO.RegisterRequest;
import com.example.manitenanceSystem.DTO.RegisterResponse;
import com.example.manitenanceSystem.Servizi.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserService userSer;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@Valid @RequestBody LoginRequest lr) {
        LoginResponseDTO risposta = userSer.userLogin(lr);
        if (risposta.getMessage().equals("Login effettuato con successo")) {
            return ResponseEntity.status(HttpStatus.CREATED).body(risposta);
        }
        if ((risposta.getMessage().equals("Password errata"))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(risposta);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(risposta);
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest rr) {
        RegisterResponse risposta = userSer.userRegister(rr);
        if (risposta.getMessage().equals("Utente esiste gia")) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(risposta);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(risposta);
    }

}

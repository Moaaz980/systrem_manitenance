package com.example.manitenanceSystem.Servizi;


import com.example.manitenanceSystem.DTO.LoginRequest;
import com.example.manitenanceSystem.DTO.LoginResponseDTO;
import com.example.manitenanceSystem.DTO.RegisterRequest;
import com.example.manitenanceSystem.DTO.RegisterResponse;
import com.example.manitenanceSystem.Entità.User;
import com.example.manitenanceSystem.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRep;

    public LoginResponseDTO userLogin(LoginRequest logReq) {
        Optional<User> optUser = userRep.findByUsername(logReq.getUsername());
        if (optUser.isPresent()) {
            User user = optUser.get();
            if (user.getPassword().equals(logReq.getPassword())) {
                return new LoginResponseDTO("Login effettuato con successo");
            }
            return new LoginResponseDTO("Password errata");
        }
        return new LoginResponseDTO("Utente non esiste");
    }

    public RegisterResponse userRegister(RegisterRequest regReq) {
        Optional<User> optUser = userRep.findByUsername(regReq.getUsername());
        if (optUser.isPresent()) {
            return new RegisterResponse("Utente esiste gia");
        }
        User user = new User();
        user.setUsername(regReq.getUsername());
        user.setPassword(regReq.getPassword());
        user.setRole(regReq.getRole());
        userRep.save(user);
        return new RegisterResponse("Registrazione avvenuta con successo");
    }

}

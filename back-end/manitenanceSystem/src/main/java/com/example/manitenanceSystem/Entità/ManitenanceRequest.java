package com.example.manitenanceSystem.Entità;


import com.example.manitenanceSystem.Enums.Stato;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Setter
public class ManitenanceRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descrizione;
    private LocalDate data;
    @Enumerated(EnumType.STRING)
    private Stato stato;
    private LocalTime durata;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}

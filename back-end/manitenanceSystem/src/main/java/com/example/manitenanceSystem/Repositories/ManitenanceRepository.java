package com.example.manitenanceSystem.Repositories;


import com.example.manitenanceSystem.Entità.ManitenanceRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManitenanceRepository extends JpaRepository<ManitenanceRequest , Long> {
}

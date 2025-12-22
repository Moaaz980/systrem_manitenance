package com.example.manitenanceSystem.Repositories;

import com.example.manitenanceSystem.Entità.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}

package com.techelevator.repository;
import com.techelevator.model.Pantry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PantryRepository extends JpaRepository <Pantry, Long> {
}

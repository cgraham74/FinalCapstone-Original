package com.techelevator.repository;

import com.techelevator.model.Pantry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PantryRepository extends JpaRepository<Pantry, Integer>{

    @Query("SELECT p.pantryid FROM Pantry p WHERE p.user_id = :user_id")
    Integer getUserPantryId(@Param("user_id") Long user_id);

}

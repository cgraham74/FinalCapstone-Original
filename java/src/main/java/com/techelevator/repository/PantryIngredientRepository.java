package com.techelevator.repository;

import com.techelevator.model.PantryIngredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Collection;

@Repository
public interface PantryIngredientRepository extends JpaRepository <PantryIngredient, Integer> {

    @Query("SELECT p FROM PantryIngredient p WHERE p.user_id = :user_id")
    Collection<PantryIngredient> findAllPantryIngredientsByUserId(@Param("user_id") Long user_id);

}

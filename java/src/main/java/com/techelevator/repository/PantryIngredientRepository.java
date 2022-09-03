package com.techelevator.repository;

import com.techelevator.model.PantryIngredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Collection;

@Repository
public interface PantryIngredientRepository extends JpaRepository <PantryIngredient, Integer> {

    @Query("SELECT p FROM PantryIngredient p WHERE p.pantryid = :pantryid")
    Collection<PantryIngredient> findAllPantryIngredientsByUserId(@Param("pantryid") Integer pantryid);

}

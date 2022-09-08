package com.techelevator.repository;

import com.techelevator.model.Ingredient;
import com.techelevator.model.RecipeIngredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {

    @Query("SELECT r.ingredientid FROM Ingredient r WHERE r.name LIKE :name")
    Ingredient getIngredientByName(@Param("name") String name);


}

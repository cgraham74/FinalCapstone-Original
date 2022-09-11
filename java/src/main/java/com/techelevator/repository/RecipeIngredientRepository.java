package com.techelevator.repository;

import com.techelevator.model.RecipeIngredient;
import com.techelevator.model.RecipeIngredientDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface RecipeIngredientRepository extends JpaRepository<RecipeIngredient, Integer> {

    @Query("SELECT r FROM RecipeIngredient r WHERE r.recipeid = :recipeid")
    List<RecipeIngredient> getRecipeIngredients(@Param("recipeid") Integer recipeid);


    @Query("SELECT r.title FROM RecipeIngredient r WHERE r.ingredientid = : ingredientid")
    String getRecipeTitleFromIngredient(@Param("ingredientid") Integer ingredientid);

//    @Modifying
//    @Transactional
//    @Query("DELETE r FROM RecipeIngredient r WHERE r.recipeid = :recipeid")
//    void deleteRecipeIngredients(@Param("recipeid") Integer recipeid);

}

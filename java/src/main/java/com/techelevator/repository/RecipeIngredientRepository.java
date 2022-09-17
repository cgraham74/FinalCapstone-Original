package com.techelevator.repository;

import com.techelevator.model.RecipeIngredient;
import com.techelevator.model.RecipeIngredientDTO;
import com.techelevator.model.ShoppingListDTO;
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

    @Query(value = "select distinct i.name from ingredient as i\n" +
            "join recipeingredient as r on i.ingredientid = r.ingredientid\n" +
            "join recipemeal as m on r.recipeid = m.recipeid\n" +
            "join meal as f on m.mealid = f.mealid\n" +
            "join mealplan as p on f.user_id = p.user_id\n" +
            "where p.user_id = :user_id", nativeQuery = true)
    List<String> getListOfIngredientNames(@Param("user_id") Long user_id);

//    @Modifying
//    @Transactional
//    @Query("DELETE r FROM RecipeIngredient r WHERE r.recipeid = :recipeid")
//    void deleteRecipeIngredients(@Param("recipeid") Integer recipeid);

}

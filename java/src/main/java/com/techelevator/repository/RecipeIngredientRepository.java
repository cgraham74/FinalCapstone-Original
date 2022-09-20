package com.techelevator.repository;

import com.techelevator.model.RecipeIngredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeIngredientRepository extends JpaRepository<RecipeIngredient, Integer> {

    @Query("SELECT r FROM RecipeIngredient r WHERE r.recipeid = :recipeid")
    List<RecipeIngredient> getRecipeIngredients(@Param("recipeid") Integer recipeid);


    @Query("SELECT r.title FROM RecipeIngredient r WHERE r.ingredientid = : ingredientid")
    String getRecipeTitleFromIngredient(@Param("ingredientid") Integer ingredientid);

    @Query(value = "SELECT DISTINCT i.name FROM ingredient AS i \n" +
            "JOIN recipeingredient AS x ON x.ingredientid = i.ingredientid \n" +
            "JOIN recipe AS r ON r.recipeid = x.recipeid \n" +
            "JOIN mealplan AS m ON m.recipename LIKE r.title \n" +
            "WHERE m.user_id = :user_id", nativeQuery = true)
    List<String> getListOfIngredientNames(@Param("user_id") Long user_id);


//    @Query(value = "select distinct i.name from ingredient as i\n" +
//            "join recipeingredient as r on i.ingredientid = r.ingredientid\n" +
//            "join recipemeal as m on r.recipeid = m.recipeid\n" +
//            "join meal as f on m.mealid = f.mealid\n" +
//            "join mealplan as p on f.user_id = p.user_id\n" +
//            "where p.user_id = :user_id", nativeQuery = true)
//    List<String> getListOfIngredientNames(@Param("user_id") Long user_id);

//    @Modifying
//    @Transactional
//    @Query("DELETE r FROM RecipeIngredient r WHERE r.recipeid = :recipeid")
//    void deleteRecipeIngredients(@Param("recipeid") Integer recipeid);

}

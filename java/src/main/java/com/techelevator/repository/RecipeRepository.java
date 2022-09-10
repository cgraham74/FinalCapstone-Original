package com.techelevator.repository;

import com.techelevator.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer>, CrudRepository<Recipe, Integer> {

    @Query("SELECT r.title FROM Recipe r WHERE r.category LIKE :category")
    Object[] testGetRecipeTitleByCategory(@Param("category") String category);

    @Query("SELECT r FROM Recipe r WHERE r.title LIKE :title")
    Recipe recipeByTitle(@Param("title") String title);

//    @Modifying
//    @Transactional
//    @Query("DELETE r FROM Recipe r WHERE r.recipeid = :recipeid")
//    void deleteRecipe(@Param("recipeid") Integer recipeid);

}

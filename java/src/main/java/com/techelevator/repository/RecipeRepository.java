package com.techelevator.repository;

import com.techelevator.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    @Query("SELECT r.title FROM Recipe r WHERE r.category LIKE :category")
    Object[] testGetRecipeTitleByCategory(@Param("category") String category);

}

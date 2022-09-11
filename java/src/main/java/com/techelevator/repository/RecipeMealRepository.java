package com.techelevator.repository;

import com.techelevator.model.RecipeMeal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface  RecipeMealRepository extends JpaRepository<RecipeMeal, Integer> {

    @Query("SELECT r.recipeid FROM RecipeMeal r WHERE r.mealid = :mealid")
    Integer getRecipeIdFromMealId(@Param("mealid") Integer mealid);

}

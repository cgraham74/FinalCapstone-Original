package com.techelevator.repository;

import com.techelevator.model.MealPlanMeal;
import com.techelevator.model.MealPlannerDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MealPlanMealRepository extends JpaRepository<MealPlanMeal, Integer> {

    @Query("SELECT m FROM MealPlanMeal m WHERE m.mealplanid = :mealplanid")
    List<MealPlanMeal> getMealPlanMealList(@Param("mealplanid") Integer mealplanid);

    @Query(nativeQuery = true)
    List<MealPlannerDTO> mealPlannerDTOListQuery(Integer mealplanid);

}

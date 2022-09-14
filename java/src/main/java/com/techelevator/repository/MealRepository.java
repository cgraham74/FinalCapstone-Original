package com.techelevator.repository;

import com.techelevator.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends JpaRepository<Meal, Integer> {

    @Query("SELECT m.mealid FROM Meal m WHERE m.name = :name")
    Integer getMealIdFromName(@Param("name") String name);

}

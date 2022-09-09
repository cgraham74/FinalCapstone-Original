package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MealPlanMealDTO {

    @JsonProperty
    private Long mealplanid;

    @JsonProperty
    private Long mealid;

    @JsonProperty
    private String dayofweek;
}

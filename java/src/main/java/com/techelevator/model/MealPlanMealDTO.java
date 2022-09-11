package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MealPlanMealDTO {

    @JsonProperty
    private Integer mealplanid;

    @JsonProperty
    private Integer mealid;

    @JsonProperty
    private String dayofweek;
}

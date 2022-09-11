package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RecipeMealDTO {

    @JsonProperty
    private Integer recipeid;

    @JsonProperty
    private Integer mealid;
}

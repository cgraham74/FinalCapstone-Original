package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RecipeMealDTO {

    @JsonProperty
    private Long recipeid;

    @JsonProperty
    private Long mealid;
}

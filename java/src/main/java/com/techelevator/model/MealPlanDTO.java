package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class MealPlanDTO {
    @JsonProperty
    private String name;

    @JsonProperty
    private Double mealplanid;

    @JsonProperty
    private String description;

    @JsonProperty
    private String user_id;

    @JsonProperty
    private String imagefilename;
    




}

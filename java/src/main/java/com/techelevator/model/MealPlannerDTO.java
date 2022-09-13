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
public class MealPlannerDTO {

    @JsonProperty
    private String dayofweek;

    @JsonProperty
    private String category;

    @JsonProperty
    private String title;

}

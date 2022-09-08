package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeIngredientDTO {

    @JsonProperty
    private String name;

    @JsonProperty
    private Double quantity;

    @JsonProperty
    private String measurementunit;

}

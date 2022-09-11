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
public class ShoppingListDTO {

    //This is horrible
    @JsonProperty
    private String ingredientName;

    @JsonProperty
    private String recipeTitle;

}

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
public class MealDTO {

    @JsonProperty
    private Long mealid;

    @JsonProperty
    private Long user_id;

    @JsonProperty
    private String name;

    @JsonProperty
    private String category;

    @JsonProperty
    private String imagefilename;

}

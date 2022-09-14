package com.techelevator.model;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MealPlannerDTO {

    //Example: Monday
    @JsonProperty
    private String dayofweek;

    //Example: Breakfast
    @JsonProperty
    private String category;

    //Example: Pancakes
    @JsonProperty
    private String title;

    //For the meal Plan
    // ---OPTIONAL---

//    @Column(name = "name")
//    private String name;
//
//    @Column(name = "description")
//    private String description;
//
//    @Column(name = "imagefilename")
//    private String imagefilename;
//

}

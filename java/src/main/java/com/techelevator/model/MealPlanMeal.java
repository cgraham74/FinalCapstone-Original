package com.techelevator.model;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "mealplanmeal")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MealPlanMeal {


    @Column(name = "mealplanid")
    @NotNull
    private Integer mealplanid;

    @Id
    @Column(name = "mealid")
    @NotNull
    private Integer mealid;


    @Column(name = "dayofweek")
    @NotNull
    private String dayofweek;

}

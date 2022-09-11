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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mealplanid")
    private Integer mealplanid;

    @Column(name = "mealid")
    @NotNull
    private Integer mealid;

    @Column(name = "dayofweek")
    @NotNull
    private String dayofweek;

}

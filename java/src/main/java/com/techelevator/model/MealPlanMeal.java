package com.techelevator.model;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "meal")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class MealPlanMeal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mealplanid")
    @NotNull
    private Long mealplanid;

    @Column(name = "mealid")
    @NotNull
    private Long mealid;

    @Column(name = "dayofweek")
    @NotNull
    private String dayofweek;

}

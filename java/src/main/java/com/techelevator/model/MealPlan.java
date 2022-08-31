package com.techelevator.model;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "mealPlan")
public class MealPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "planId",
    insertable = false,
    updatable = false)
    @NotNull
    private Long planId;

    @Column(name = "planName")
    @NotNull
    private String planName;

}

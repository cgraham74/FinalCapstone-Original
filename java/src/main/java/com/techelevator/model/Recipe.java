package com.techelevator.model;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name ="recipe")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipeId",
            insertable = false,
            updatable = false)
    @NotNull
    private Long recipeId;

    @Column(name = "recipeName")
    private String recipeName;

    @Column(name = "ingredients")
    private String[] ingredients;

    //Does this need to be a decimal?
    @Column(name = "amountNeeded")
    private Integer amountNeeded;

    @Column(name = "instructions")
    private String instructions;

}

package com.techelevator.model;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "pantry")
public class Pantry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pantryId",
            insertable = false,
            updatable = false)
    @NotNull
    private Long planId;

    @Column(name = "ingredientsHave")
    private String[] ingredientsHave;

}

package com.techelevator.model;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Table(name = "pantryingredient")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PantryIngredient {

    @Column(name = "pantryid")
    @NotNull
    private Integer pantryid;

    @Id
    @Column(name = "ingredientid")
    @NotNull
    private Integer ingredientid;

    @Column(name = "quantity")
    @NotNull
    private Double quantity;

    @Column(name = "measurementunit")
    @NotNull
    private String measurementunit;

    @Column(name = "user_id")
    @NotNull
    private Long user_id;

//    @ManyToOne
//    @JoinColumn(name = "pantryid",
//            insertable = false,
//            updatable= false)
//    private Pantry pantry;
//
//    @ManyToOne
//    @JoinColumn(name = "ingredientid",
//            insertable = false,
//            updatable= false)
//    private Ingredient ingredient;

}

package com.techelevator.model;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "pantryingredient")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PantryIngredient {

    @Id
    @Column(name = "pantryid")
    @NotNull
    private Integer pantryid;

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

}

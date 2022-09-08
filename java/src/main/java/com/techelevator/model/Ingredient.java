package com.techelevator.model;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ingredient")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredientid")
    @NotNull
    private Integer ingredientid;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "category")
    private String category;

    public Ingredient(String name) {
    }
}
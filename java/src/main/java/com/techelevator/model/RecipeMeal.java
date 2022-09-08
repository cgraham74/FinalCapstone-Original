package com.techelevator.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "recipemeal")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class RecipeMeal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipeid")
    @NotNull
    private Long recipeid;

    @Column(name = "mealid")
    @NotNull
    private Long mealid;
}

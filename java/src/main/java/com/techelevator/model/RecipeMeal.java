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
    @Column(name = "recipeid")
    @NotNull
    private Integer recipeid;

    @Column(name = "mealid")
    @NotNull
    private Integer mealid;
}

package com.techelevator.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "mealplan")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class MealPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mealplanid")
    @NotNull
    private Integer mealplanid;

    @Column(name = "user_id")
    @NotNull
    private Long user_id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "description")
    @NotNull
    private String description;

    @Column(name = "imagefilename")
    @NotNull
    private String imagefilename;
}

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

public class Meal {

    @Id
    @Column(name = "mealid")
    @NotNull
    private Integer mealid;

    @Column(name = "user_id")
    @NotNull
    private Long user_id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "category")
    @NotNull
    private String category;

    @Column(name = "imagefilename")
    private String imagefilename;
}

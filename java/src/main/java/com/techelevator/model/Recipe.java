package com.techelevator.model;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "recipe")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipeid")
    @NotNull
    private Integer recipeid;

    @Column(name = "user_id")
    @NotNull
    private Long user_id;

    @Column(name = "title")
    @NotNull
    private String title;

    @Column(name = "category")
    @NotNull
    private String category;

    @Column(name = "difficultylevel")
    @NotNull
    private String difficultylevel;

    @Column(name = "preptime")
    @NotNull
    private Integer preptime;

    @Column(name = "cooktime")
    @NotNull
    private Integer cooktime;

    @Column(name = "servingsize")
    @NotNull
    private Integer servingsize;

    @Column(name = "instructions")
    @NotNull
    private String instructions;

    @Column(name = "datecreated")
    @NotNull
    private Date date;

    @Column(name = "imagename")
    @NotNull
    private String imagename;




}

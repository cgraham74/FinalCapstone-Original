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

    //Generated and Not Null data tables.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipeid")
    private Integer recipeid;

    //Make this a join!
    @Column(name = "user_id")
    @NotNull
    private Long user_id;
    //Make the above a join!

    @Column(name = "title")
    @NotNull
    private String title;

    @Column(name = "category")
    @NotNull
    private String category;

    @Column(name = "servingsize")
    @NotNull
    private Integer servingsize;

    @Column(name = "instructions")
    @NotNull
    private String instructions;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    User user;

    // Would be nice but not needed.

    @Column(name = "difficultylevel")
    private String difficultylevel;

    @Column(name = "preptime")
    private Integer preptime;

    @Column(name = "cooktime")
    private Integer cooktime;

    @Column(name = "datecreated")
    private Date date;

    @Column(name = "imagename")
    private String imagename;




}

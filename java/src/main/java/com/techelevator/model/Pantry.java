package com.techelevator.model;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "pantry")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Pantry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pantryid")
    @NotNull
    private Integer pantryid;

    @Column(name = "user_id")
    @NotNull
    private Long user_id;

}
package com.techelevator.model;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@NamedNativeQuery(name = "MealPlanMeal.mealPlannerDTOListQuery", query =
        "SELECT p.dayofweek AS dayofweek, m.category AS category, m.name AS title FROM mealplanmeal AS p\n" +
                "JOIN meal AS m ON p.mealid = m.mealid\n" +
                "WHERE p.mealplanid = :mealplanid", resultSetMapping = "Mapping.MealPlannerDTO")
@SqlResultSetMapping(name = "Mapping.MealPlannerDTO",
        classes = @ConstructorResult(targetClass = MealPlannerDTO.class, columns = {
                @ColumnResult(name = "dayofweek"),
                @ColumnResult(name = "category"),
                @ColumnResult(name = "title")}))

@Entity
@Table(name = "mealplanmeal")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MealPlanMeal {


    @Column(name = "mealplanid")
    @NotNull
    private Integer mealplanid;

    @Id
    @Column(name = "mealid")
    @NotNull
    private Integer mealid;


    @Column(name = "dayofweek")
    @NotNull
    private String dayofweek;

}

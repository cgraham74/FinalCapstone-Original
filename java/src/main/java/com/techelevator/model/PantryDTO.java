package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PantryDTO {

    @JsonProperty
    private String ingredient;

    @JsonProperty
    private Double quantity;

    @JsonProperty
    private String measurementUnit;

}

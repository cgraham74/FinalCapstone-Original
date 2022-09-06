package com.techelevator.controller;

import com.techelevator.model.PantryDTO;
import com.techelevator.model.Recipe;
import com.techelevator.model.RecipeDTO;
import com.techelevator.model.RecipeIngredient;
import com.techelevator.service.Services;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.Collection;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/Test")
@AllArgsConstructor
public class MainController {

    private final Services services;

//    @GetMapping(path = "/Pantry")
//    public List<String> getUsersPantry(Principal principal) {
//        return services.getUserPantry(services.getUserId(principal.getName()));
//    }

    @GetMapping(path = "/TestBreakfast")
    public Object[] testGetRecipeTitleFromCategory() {
        return services.testGetRecipeTitleByCategory("Breakfast");
    }

    @GetMapping(path = "/PantryTest")
    public List<PantryDTO> testGetUsersPantry() {
        return services.testGetUserPantryDTO();
    }

    @GetMapping(path = "/RecipeTest")
    public RecipeDTO testGetRecipe() {
        //Hardcoded '1' until we get a back and forth
        return services.testGetRecipeDTO(1);
    }

    @GetMapping(path = "/RecipeListTest")
    public Collection<RecipeDTO> testGetRecipeList(){
        return services.testListOfRecipes();
    }

}

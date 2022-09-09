package com.techelevator.controller;

import com.techelevator.model.PantryDTO;
import com.techelevator.model.Recipe;
import com.techelevator.model.RecipeDTO;
import com.techelevator.model.RecipeIngredient;
import com.techelevator.service.Services;
import lombok.AllArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.security.Principal;
import java.util.Collection;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/Test")
@AllArgsConstructor
@EnableWebSecurity
@Secured({"ROLE_USER", "ROLE_ADMIN"})
public class MainController {

    private final Services services;

//    @GetMapping(path = "/Pantry")
//    public List<String> getUsersPantry(Principal principal) {
//        return services.getUserPantry(services.getUserId(principal.getName()));
//    }
    @PermitAll
    @GetMapping(path = "/TestBreakfast")
    public Object[] testGetRecipeTitleFromCategory() {
        return services.testGetRecipeTitleByCategory("Breakfast");
    }
    @PermitAll
    @GetMapping(path = "/PantryTest")
    public List<PantryDTO> testGetUsersPantry() {
        return services.testGetUserPantryDTO();
    }

    @PermitAll
    @GetMapping(path = "/RecipeTest")
    public RecipeDTO testGetRecipe() {
        //Hardcoded '1' until we get a back and forth
        return services.testGetRecipeDTO(1);
    }

    @PermitAll
    @GetMapping(path = "/RecipeListTest")
    public Collection<RecipeDTO> testGetRecipeList(){
        return services.testListOfRecipes();
    }

    @PostMapping(path = "/RecipeSaveTest")
    public void saveRecipe(@RequestBody RecipeDTO recipeDTO, Principal principal) {
        services.saveRecipeAndIngredients(recipeDTO,principal.getName());

    }

    @GetMapping(path = "/RecipeDeleteTest")
    public void deleteRecipe(@RequestBody Integer id, Principal principal) {
        services.deleteRecipe(id, principal.getName());
    }

}

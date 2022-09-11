package com.techelevator.controller;

import com.techelevator.model.*;
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
@RequestMapping(path = "/recipe")
@AllArgsConstructor
//@EnableWebSecurity
//@Secured({"ROLE_USER", "ROLE_ADMIN"})
public class MainController {

    private final Services services;

//    @GetMapping(path = "/Pantry")
//    public List<String> getUsersPantry(Principal principal) {
//        return services.getUserPantry(services.getUserId(principal.getName()));
//    }

    @PermitAll
    @GetMapping(path = "/breakfast")
    public Object[] testGetRecipeTitleFromCategory() {
        return services.testGetRecipeTitleByCategory("Breakfast");
    }
    //  @GetMapping(path = "/pantry/{user_id}")  This broke the code!
    @PermitAll
    @GetMapping(path = "/pantry")
    public List<PantryDTO> testGetUsersPantry(@PathVariable("user_id") String user_id) {
        return services.testGetUserPantryDTO(user_id);
    }

    @PermitAll
    @GetMapping(path = "/get/{recipeid}")
    public RecipeDTO testGetRecipeById(@PathVariable("recipeid") Integer recipeid) {
        return services.getRecipeById(recipeid);
    }

    @PermitAll
    @PutMapping(path = "/update/{id}")
    public void update(@RequestBody RecipeDTO recipeDTO, @PathVariable int id) {
        recipeDTO.setRecipeid(id);

        services.updateRecipe(recipeDTO);

    }

    @PermitAll
    @GetMapping(path = "/list")
    public Collection<RecipeDTO> testGetRecipeList(){
        return services.testListOfRecipes();
    }

    @PostMapping(path = "/save")
    @ResponseBody
    public void saveRecipe(@RequestBody RecipeDTO recipeDTO) {
        System.out.println("The recipeDTO: " + recipeDTO.getTitle());
        services.saveRecipeAndIngredients(recipeDTO);
    }

    @PermitAll
    @GetMapping(path = "/shoppinglist")
    public List<ShoppingListDTO> shoppingList(String name) {
        name = "Ed";
        return services.getMealPlanSHoppingListFromUser(name);
    }


    //UNCOMMENT IF YOU DARE!

//    @PermitAll
//    @DeleteMapping(path = "/delete/{id}")
//    public void deleteRecipe(@PathVariable("id") int id) {
//        services.deleteRecipe(id);
//    }

}

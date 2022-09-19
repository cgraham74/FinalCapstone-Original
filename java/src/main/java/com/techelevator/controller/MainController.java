package com.techelevator.controller;

import com.techelevator.dao.UserDao;
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
@EnableWebSecurity
@Secured({"ROLE_USER", "ROLE_ADMIN"})
public class MainController {

    private final Services services;


    //Grabs meal plan based on token's username.
    @GetMapping(path = "/mealplan")
    public List<MealPlan> mealPlanner(Principal principal) {
        return services.mealPlanListForUser(principal.getName());
    }

    @PostMapping(path = "/mealplan/save")
    public void updateMealPlan(@RequestBody List<MealPlannerDTO> mealPlannerDTO, Principal principal){

        services.saveMealPlan(mealPlannerDTO, principal.getName());
    }

    @PreAuthorize("permitAll")
    @GetMapping(path = "/breakfast")
    public Collection<RecipeDTO> getRecipeTitleFromBreakfast() {
        return services.listOfRecipesByCategory("Breakfast");
    }
    @PreAuthorize("permitAll")
    @GetMapping(path = "/lunch")
    public Collection<RecipeDTO> getRecipeTitleFromLunch() {
        return services.listOfRecipesByCategory("Lunch");
    }
    @PreAuthorize("permitAll")
    @GetMapping(path = "/dinner")
    public Collection<RecipeDTO> getRecipeTitleFromDinner() {
        return services.listOfRecipesByCategory("Dinner");
    }



    @GetMapping(path = "/get/{recipeid}")
    public RecipeDTO testGetRecipeById(@PathVariable("recipeid") Integer recipeid) {
        return services.getRecipeById(recipeid);
    }

    @PutMapping(path = "/update/{id}")
    public void update(@RequestBody RecipeDTO recipeDTO, @PathVariable int id) {
        recipeDTO.setRecipeid(id);

        services.updateRecipe(recipeDTO);
    }

    @GetMapping(path = "/list")
    public Collection<RecipeDTO> getRecipeList(Principal principal){
        return services.listOfUsersRecipes(principal.getName());
    }

    //Get a list of ALL recipes in the system.
    @GetMapping(path = "/listall")
    public Collection<RecipeDTO> getAllRecipeList(){
        return services.listOfAllRecipesByDistinctTitle();
    }

    @PostMapping(path = "/save")
    @ResponseBody
    public void saveRecipe(@RequestBody RecipeDTO recipeDTO, Principal principal) {
        System.out.println("Save Recipe was pinged by: " + principal.getName());
        System.out.println("The recipeDTO: " + recipeDTO.getTitle());
        services.saveRecipeAndIngredients(recipeDTO);
    }

    @RequestMapping(path = "/shoppinglist")
    public List<ShoppingListDTO> shoppingList(Principal principal) {
        return services.getMealPlanShoppingListFromUser(principal.getName());
    }

}

    //UNCOMMENT IF YOU DARE!

//    @PermitAll
//    @DeleteMapping(path = "/delete/{id}")
//    public void deleteRecipe(@PathVariable("id") int id) {
//        services.deleteRecipe(id);




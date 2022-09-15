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


    //-------------------QUERIES-------------------

    private final Services services;

    @PermitAll
    @GetMapping(path = "/mealplan")
    public List<MealPlannerDTO> mealPlanner(String name) {
        return services.mealPlanListForUser(name);
    }

    @PermitAll
    @PostMapping(path = "/mealplan/save")
    public void updateMealPlan(@RequestBody List<MealPlannerDTO> mealPlannerDTO) {

        services.saveMealPlan(mealPlannerDTO);
    }

    @PermitAll
    @GetMapping(path = "/breakfast")
    public Object[] testGetRecipeTitleFromCategory() {
        return services.testGetRecipeTitleByCategory("Breakfast");
    }
    //  @GetMapping(path = "/pantry/{user_id}")  This broke the code!


    @PermitAll
    @GetMapping(path = "/pantry")
    public List<PantryDTO> testGetUsersPantry() {

        return services.testGetUserPantryDTO("Ed");
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
        return services.getMealPlanSHoppingListFromUser(name);
    }

}


//        @GetMapping(path = "/Pantry")
//        public List<String> getUsersPantry(Principal principal) {
//            return services.getUserPantry(services.getUserId(principal.getName()));
//            }

    //UNCOMMENT IF YOU DARE!

//    @PermitAll
//    @DeleteMapping(path = "/delete/{id}")
//    public void deleteRecipe(@PathVariable("id") int id) {
//        services.deleteRecipe(id);




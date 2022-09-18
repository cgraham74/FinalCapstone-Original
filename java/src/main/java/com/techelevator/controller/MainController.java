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


    UserDao userDao;
    //-------------------QUERIES-------------------

    private final Services services;

//
//    @GetMapping(path = "/mealplan")
//    public List<MealPlannerDTO> mealPlanner(String name) {
//        return services.mealPlanListForUser(name);
//    }

//    //adding Principal to get current user
//    @GetMapping(path = "/mealplan")
//    public List<MealPlannerDTO> mealPlanner(Principal principal) {
//        return services.mealPlanListForUser(principal.getName());
//    }

    //adding Principal to get current user
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



    @GetMapping(path = "/pantry")
    public List<PantryDTO> testGetUsersPantry() {

        return services.testGetUserPantryDTO("Ed");
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

    //THIS MIGHT HAVE BROKEN EVERYTHING :D
    @GetMapping(path = "/list")
    public Collection<RecipeDTO> getRecipeList(Principal principal){
        System.out.println("Get Recipe List Was Pinged!");
        return services.listOfUsersRecipes(principal.getName());
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


//        @GetMapping(path = "/Pantry")
//        public List<String> getUsersPantry(Principal principal) {
//            return services.getUserPantry(services.getUserId(principal.getName()));
//            }

    //UNCOMMENT IF YOU DARE!

//    @PermitAll
//    @DeleteMapping(path = "/delete/{id}")
//    public void deleteRecipe(@PathVariable("id") int id) {
//        services.deleteRecipe(id);




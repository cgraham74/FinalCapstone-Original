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
@EnableWebSecurity
@Secured({"ROLE_USER", "ROLE_ADMIN"})
public class MainController {


    //-------------------QUERIES-------------------

    private final Services services;

    @PreAuthorize("isAuthenticated()")
    @GetMapping(path = "/mealplan")
    public List<MealPlannerDTO> mealPlanner(String name) {
        return services.mealPlanListForUser(name);
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping(path = "/mealplan/save")
    public void updateMealPlan(@RequestBody List<MealPlannerDTO> mealPlannerDTO) {

        services.saveMealPlan(mealPlannerDTO);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(path = "/breakfast")
    public Object[] testGetRecipeTitleFromCategory() {
        return services.testGetRecipeTitleByCategory("Breakfast");
    }
    //  @GetMapping(path = "/pantry/{user_id}")  This broke the code!


    @PreAuthorize("isAuthenticated()")
    @GetMapping(path = "/pantry")
    public List<PantryDTO> testGetUsersPantry() {

        return services.testGetUserPantryDTO("Ed");
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(path = "/get/{recipeid}")
    public RecipeDTO testGetRecipeById(@PathVariable("recipeid") Integer recipeid) {
        return services.getRecipeById(recipeid);
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping(path = "/update/{id}")
    public void update(@RequestBody RecipeDTO recipeDTO, @PathVariable int id) {
        recipeDTO.setRecipeid(id);

        services.updateRecipe(recipeDTO);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(path = "/list")
    public Collection<RecipeDTO> getRecipeList(Principal principal){
        return services.testListOfRecipes(principal.getName());
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping(path = "/save")
    @ResponseBody
    public void saveRecipe(@RequestBody RecipeDTO recipeDTO) {
        System.out.println("The recipeDTO: " + recipeDTO.getTitle());
        services.saveRecipeAndIngredients(recipeDTO);
    }

    @PreAuthorize("isAuthenticated()")
    @PermitAll
    @RequestMapping(path = "/shoppinglist")
    public List<ShoppingListDTO> shoppingList(Principal principal) {
        System.out.println(principal.toString());
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




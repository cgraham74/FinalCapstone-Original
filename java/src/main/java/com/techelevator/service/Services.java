package com.techelevator.service;

import com.techelevator.dao.UserDao;
import com.techelevator.model.*;
import com.techelevator.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class Services {

    @Autowired
    PantryRepository pantryRepository;
    @Autowired
    PantryIngredientRepository pantryIngredientRepository;
    @Autowired
    IngredientRepository ingredientRepository;
    @Autowired
    RecipeRepository recipeRepository;
    @Autowired
    RecipeIngredientRepository recipeIngredientRepository;
    UserDao userDao;

    //For when we're using Principle names.
    public Long getUserId(String username) {
        return userDao.findIdByUsername(username);
    }

    //-------------------QUERIES-------------------
    public Object[] testGetRecipeTitleByCategory(String category) {

        //PLACEHOLDER VALUE
        category = "Breakfast";

        return recipeRepository.testGetRecipeTitleByCategory(category);
    }

    //Currently how we're going to get the user's pantry.
    //-------------------PANTRY-------------------
    public List<PantryDTO> testGetUserPantryDTO() {

        //Placeholder, this will be the id passed in above
        Integer recipeid = 1;

        List<PantryDTO> usersPantry = new ArrayList<>();
        List<PantryIngredient> usersPantryIngredients = new ArrayList<>(pantryIngredientRepository.findAllPantryIngredientsByUserId(recipeid));

        for (PantryIngredient usersPantryIngredient : usersPantryIngredients) {

            String ingredientName = ingredientRepository.getOne(usersPantryIngredient.getIngredientid()).getName();

            usersPantry.add(new PantryDTO(ingredientName, usersPantryIngredient.getQuantity(), usersPantryIngredient.getMeasurementunit()));
        }

        return usersPantry;
    }

    //Get the recipe's ingredients for the DTO
    //-------------------RECIPES-------------------
    public List<RecipeIngredientDTO> testGetRecipeIngredients(Integer recipeid) {

        //Placeholder, the above id will be passed in

        List<RecipeIngredient> recipeIngredients = recipeIngredientRepository.testGetRecipeIngredients(recipeid);
        List<RecipeIngredientDTO> recipeIngredientsDTO = new ArrayList<>();

        for (RecipeIngredient recipeIngredient : recipeIngredients) {

            recipeIngredientsDTO.add(new RecipeIngredientDTO(
                    ingredientRepository.getOne(recipeIngredient.getIngredientid()).getName(),
                    recipeIngredient.getQuantity(),
                    recipeIngredient.getMeasurementunit()));
        }

        return recipeIngredientsDTO;
    }

    //Get the specific recipe for the DTO

    public RecipeDTO testGetRecipeDTO(Integer recipeId) {

        //Placeholder, this will be the id passed in above

        RecipeDTO recipeDTO = (new RecipeDTO(
                recipeId,
                recipeRepository.getOne(recipeId).getUser_id(),
                recipeRepository.getOne(recipeId).getTitle(),
                recipeRepository.getOne(recipeId).getCategory(),
                recipeRepository.getOne(recipeId).getImagename(),
                testGetRecipeIngredients(recipeId),
                recipeRepository.getOne(recipeId).getInstructions(),
                recipeRepository.getOne(recipeId).getServingsize()));

        return recipeDTO;
    }

    public Collection<RecipeDTO> testListOfRecipes() {

        Collection<RecipeDTO> listOfRecipeDTO = new ArrayList<>();
        Collection<Recipe> recipes = recipeRepository.findAll();

        for (Recipe recipe : recipes) {

            listOfRecipeDTO.add(testGetRecipeDTO(recipe.getRecipeid()));

        }

        return listOfRecipeDTO;

    }

}

package com.techelevator.service;

import com.techelevator.dao.UserDao;
import com.techelevator.model.*;
import com.techelevator.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
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

    //-------------------DELETE-------------------
    public void deleteRecipe (Integer recipeId, String name) {
        recipeRepository.deleteById(recipeId);

        System.out.println(name + ": DELETED EVERYTHING OH NO");
    }


    //-------------------CREATE-------------------

    public Ingredient checkOrCreateIngredient (String name) {

        if (ingredientRepository.getIngredientByName(name) == null) {
            Ingredient tempIngredient = new Ingredient(name);
            ingredientRepository.save(tempIngredient);
        }

        return ingredientRepository.getIngredientByName(name);
    }

    public Recipe checkOrCreateRecipeId(String title) {

        if (recipeRepository.recipeByTitle(title) == null) {
            Recipe tempRecipe = new Recipe();
            recipeRepository.save(tempRecipe);
            System.out.println(tempRecipe.getRecipeid());
        }
        return recipeRepository.recipeByTitle(title);

    }

    public void createRecipeIngredients (RecipeDTO recipeDTO) {

        List<RecipeIngredientDTO> tempIngredients = new ArrayList<>(recipeDTO.getIngredientList());
        List<RecipeIngredient> recipeIngredients = new ArrayList<>();

        for (RecipeIngredientDTO tempIngredient : tempIngredients) {

            if (ingredientRepository.getIngredientByName(tempIngredient.getName()) == null) {
                checkOrCreateIngredient(tempIngredient.getName());
            }

            RecipeIngredient recipeIngredient = new RecipeIngredient();

            recipeIngredient.setRecipeid(checkOrCreateRecipeId(recipeDTO.getTitle()).getRecipeid());
            recipeIngredient.setIngredientid(checkOrCreateIngredient(tempIngredient.getName()).getIngredientid());
            recipeIngredient.setQuantity(tempIngredient.getQuantity());
            recipeIngredient.setMeasurementunit(tempIngredient.getMeasurementunit());

            recipeIngredients.add(recipeIngredient);
            recipeIngredientRepository.save(recipeIngredient);

        }

        System.out.println(recipeIngredients);

    }

    public void createRecipe (RecipeDTO recipeDTO, String name) {

        Recipe incomingRecipe = new Recipe();
        incomingRecipe.setRecipeid(checkOrCreateRecipeId(recipeDTO.getTitle()).getRecipeid());
        incomingRecipe.setUser_id(recipeDTO.getUser_id());
        incomingRecipe.setTitle(recipeDTO.getTitle());
        incomingRecipe.setCategory(recipeDTO.getCategory());
        incomingRecipe.setInstructions(recipeDTO.getInstructions());
        incomingRecipe.setServingsize(recipeDTO.getServingSize());
        incomingRecipe.setImagename(recipeDTO.getImageUrl());

        recipeRepository.save(incomingRecipe);

        System.out.println(incomingRecipe);
    }

    public void saveRecipeAndIngredients (RecipeDTO recipeDTO, String name) {

        createRecipe(recipeDTO, name);
        createRecipeIngredients(recipeDTO);

        System.out.println("HUZZAH");
    }

}

package com.techelevator.service;

import com.techelevator.dao.UserDao;
import com.techelevator.model.*;
import com.techelevator.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.*;

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
    public void deleteRecipe(Integer recipeId) {
        recipeRepository.deleteById(recipeId);

        System.out.println("Ed" + ": DELETED EVERYTHING OH NO");
    }


    //-------------------CREATE-------------------

    public Ingredient checkOrCreateIngredient(String name) {
        Ingredient tempIngredient = new Ingredient();

        if (ingredientRepository.getIngredientByName(name) == null) {
            tempIngredient.setName(name);
            ingredientRepository.save(tempIngredient);
            return tempIngredient;
        } else return ingredientRepository.getIngredientByName(name);
    }

//    public void checkOrCreateRecipeId(RecipeDTO recipeDTO) {
//
//        if (recipeRepository.recipeByTitle(recipeDTO.getTitle()) == null) {
//            createRecipe(recipeDTO);
//        }
//    }

    public void createRecipeIngredients(RecipeDTO recipeDTO) {

        //TRIPLE MAKING SURE YOU HAVE A RECIPE FIRST!
        if (Objects.isNull(recipeRepository.recipeByTitle(recipeDTO.getTitle()))) {
            createRecipe(recipeDTO);
        }

        List<RecipeIngredientDTO> tempIngredients = new ArrayList<>(recipeDTO.getIngredientList());
        List<RecipeIngredient> recipeIngredients = new ArrayList<>();
        RecipeIngredient recipeIngredient = new RecipeIngredient();

        for (RecipeIngredientDTO tempIngredient : tempIngredients) {

            //MAKING SURE THE INGREDIENT IS CREATED
            if (Objects.isNull(ingredientRepository.getIngredientByName(tempIngredient.getName()))) {
                Ingredient newIngredient = checkOrCreateIngredient(tempIngredient.getName());

                recipeIngredient.setRecipeid(recipeRepository.recipeByTitle(recipeDTO.getTitle()).getRecipeid());
                recipeIngredient.setIngredientid(newIngredient.getIngredientid());
                recipeIngredient.setQuantity(tempIngredient.getQuantity());
                recipeIngredient.setMeasurementunit(tempIngredient.getMeasurementunit());
                recipeIngredients.add(recipeIngredient);

                recipeIngredientRepository.save(recipeIngredient);

            } else
                recipeIngredient.setRecipeid(
                        recipeRepository.recipeByTitle(recipeDTO.getTitle()).getRecipeid());
            recipeIngredient.setIngredientid(
                    ingredientRepository.getIngredientByName(tempIngredient.getName()).getIngredientid());
            recipeIngredient.setQuantity(tempIngredient.getQuantity());
            recipeIngredient.setMeasurementunit(tempIngredient.getMeasurementunit());
            recipeIngredients.add(recipeIngredient);

            recipeIngredientRepository.save(recipeIngredient);

        }

        System.out.println(recipeIngredients);

    }

    public void createRecipe(RecipeDTO recipeDTO) {

        Recipe incomingRecipe = new Recipe();

        if (Objects.isNull(recipeRepository.recipeByTitle(recipeDTO.getTitle()))) {

            incomingRecipe.setUser_id(recipeDTO.getUser_id());
            incomingRecipe.setTitle(recipeDTO.getTitle());
            incomingRecipe.setCategory(recipeDTO.getCategory());
            incomingRecipe.setInstructions(recipeDTO.getInstructions());
            incomingRecipe.setServingsize(recipeDTO.getServingSize());
            incomingRecipe.setImagename(recipeDTO.getImageUrl());

            System.out.println("THIS IS INCOMING RECIPE! " + incomingRecipe);

            recipeRepository.save(incomingRecipe);
        }

//        if (Objects.equals(recipeDTO.getTitle(), recipeRepository.recipeByTitle(recipeDTO.getTitle()).getTitle())) {
//
//            System.out.println("Recipe Already Exists!");
//
//        }

    }

    public void saveRecipeAndIngredients(RecipeDTO recipeDTO) {

        createRecipe(recipeDTO);
        createRecipeIngredients(recipeDTO);

        System.out.println("HUZZAH");
    }

}

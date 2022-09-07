import * as ActionTypes from './actionTypes';
import { baseUrl } from "../Shared/baseUrl";


export const addToken = (token) => ({
    type: ActionTypes.ADD_TOKEN,
    payload: token
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
})

export const deleteUser = () => ({
    type: ActionTypes.DELETE_USER
})

export const fetchRecipes = () => (dispatch) => {
    fetch(baseUrl + '/Test/RecipeListTest')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return dispatch(addRecipe(data))});

};

//Calls the fetch to add the ingredients at launch - will need to implmenent
//The updated and delete as well - use this as a template
export const fetchPantryItems = () => (dispatch) => {
  fetch(baseUrl + "/Test/PantryTest")
  .then ((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("This data is from pantry" + data);
    return dispatch(addIngredient(data))
  })
};

//Global CRUD ops for ingredients to global state from pantry
export const addIngredient = (ingredient) => ({
  type: ActionTypes.ADD_INGREDIENT,
  payload: ingredient,
});
export const deleteIngredient = (ingredient) => ({
  type: ActionTypes.DELETE_INGREDIENT,
  payload: ingredient,
});
export const updateIngredient = (ingredient) => ({
  type: ActionTypes.UPDATE_INGREDIENT,
  payload: ingredient,
});

export const addRecipe = (recipes) => ({
    type: ActionTypes.ADD_RECIPE,
    payload: recipes,
  });
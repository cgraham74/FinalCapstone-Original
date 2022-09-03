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
    fetch(baseUrl + '/Test/RecipeTest')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return dispatch(addRecipe([data]))});

};

export const addRecipe = (recipes) => ({
    type: ActionTypes.ADD_RECIPE,
    payload: recipes,
  });
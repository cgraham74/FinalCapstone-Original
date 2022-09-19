import * as actionTypes from "./actionTypes";

export const AllRecipes = (state = {allrecipes: [] }, action) => {

  switch (action.type) {
    case actionTypes.ADD_ALL_RECIPES:
      return { ...state, allrecipes: action.payload };
      
    case actionTypes.UPDATE_ALL_RECIPE:
      return {
         ...state, 
         allrecipes: action.payload };

    case actionTypes.DELETE_ALL_RECIPE:
      return { ...state, allrecipes: action.payload };
    default:
      return state;
  }
};

import * as actionTypes from "./actionTypes";

export const MealSelection = (
  state = {
    mealselection: []
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_MEALSELECTION:
      return { ...state, mealselection: action.payload };
    case actionTypes.UPDATE_MEALSELECTION:
      return { ...state, mealselection: action.payload };
    case actionTypes.DELETE_MEALSELECTION:
      return { ...state, mealselection: action.payload };
    default:
      return state;
  }
};
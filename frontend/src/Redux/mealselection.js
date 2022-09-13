import * as actionTypes from "./actionTypes";

export const MealSelection = (state = {  mealselection: [] }, action ) => {
  switch (action.type) {
    case actionTypes.ADD_MEALSELECTION:
      return {
        //sets the original state
         ...state,
           
         mealselection: [...state.mealselection, action.payload]  
        };
    case actionTypes.UPDATE_MEALSELECTION:
      return { 
        //copies the original state
        ...state, 
        //Keeps original state and then adds new meals to the array
        mealselection: [...state.mealselection, action.payload]  
      };
    case actionTypes.DELETE_MEALSELECTION:
      return { 
        //copies the original state
        ...state, 
        //returns a new filtered array with all items except one with a specific id
        mealselection: 
        state.mealselection.filter(mealselection => mealselection.id !==action.payload )
        
      };
    default:
      return state;
  }
};
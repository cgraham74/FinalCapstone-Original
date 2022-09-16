import * as actionTypes from "./actionTypes";

export const MealSelection = (state = { mealselection: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_MEALSELECTION:
      //copies the original state
      return {
        ...state,
         //Keeps original state and then adds new meals to the array
        mealselection: state.mealselection.concat(action.payload) 
      };

    case actionTypes.UPDATE_MEALSELECTION:
      console.log("passing add");
      return {
        
        ...state,
        
        mealselection: state.mealselection.map((item) => {
          if (item.day === action.payload.day && item.mealtime === action.payload.mealtime){
            return action.payload;
          } else {
            return item;
          }
        }) 
      };
    case actionTypes.DELETE_MEALSELECTION:
      console.log("did it delete? No it didn't");
      return {
        //copies the original state
        ...state,
        //returns a new filtered array with all items except one with a specific id
        mealselection: state.mealselection.filter(
          (mealselection) => mealselection.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

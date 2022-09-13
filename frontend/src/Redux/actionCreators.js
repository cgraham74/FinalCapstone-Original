import * as ActionTypes from "./actionTypes";
import { baseUrl } from "../Shared/baseUrl";

export const addToken = (token) => ({
  type: ActionTypes.ADD_TOKEN,
  payload: token,
});

export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: ActionTypes.DELETE_USER,
});

export const addRecipe = (recipes) => ({
  type: ActionTypes.ADD_RECIPE,
  payload: recipes,
});

export const fetchRecipes = () => (dispatch) => {
  fetch(baseUrl + "/recipe/list")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return dispatch(addRecipe(data));
    });
};

export const updateRecipe = (recipe) => ({
  type: ActionTypes.UPDATE_RECIPE,
  payload: recipe,
});

export const createRecipe = (recipe) => ({
  type: ActionTypes.CREATE_RECIPE,
  payload: recipe,
});

export const saveRecipe =
  (
    user_id,
    title,
    imageUrl,
    ingredientList,
    instructions,
    servingSize,
    category
  ) =>
  async (dispatch) => {
    const newRecipe = {
      user_id: user_id,
      title: title,
      imageUrl: imageUrl,
      ingredientList: ingredientList,
      instructions: instructions,
      servingSize: servingSize,
      category: category,
    };

    return await fetch(baseUrl + "/recipe/save", {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-Type": "application/json",

        // "Authorization": `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        alert("Saved!" + newRecipe);
        return response;

        // resetForm(e);
      }
    });
    // .then((response) => response.json())
    // .then((data) => dispatch(addRecipe(data)))
    // .catch((err) => {
    //   console.error(err);
    //   alert("Could not save card!" + JSON.stringify(newRecipe));
    // });
  };

export const updatedRecipe =
  (
    recipeid,
    user_id,
    title,
    imageUrl,
    ingredientList,
    instructions,
    servingSize,
    category
  ) =>
  async (dispatch) => {
  
    const updateRecipe = {
      recipeid: recipeid,
      user_id: user_id,
      title: title,
      imageUrl: imageUrl,
      ingredientList: ingredientList,
      instructions: instructions,
      servingSize: servingSize,
      category: category,
    };
    
      // update
      await fetch(baseUrl + `/recipe/update/${recipeid}`, {
        method: "PUT",
        cache: "no-cache",
        body: JSON.stringify(updateRecipe),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("Edit Saved!");
          }
        })
        .catch((err) => {
          console.error("from POST " + err);
          alert("Could not save card!");
        });
  };

export const deleteRecipe = (id) => (dispatch) => {
  console.log("Is this working " + id);
  fetch(baseUrl + "/recipe/delete/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      alert("Recipe Deleted");
      return dispatch(deleteRecipe());
    }
  });
};
// export const deleteRecipe = (id) => ({
//   type: ActionTypes.DELETE_RECIPE,
//   payload: id
// })
// .fetch(baseUrl + "/recipe/delete/" + id, {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json"
//   },
// })
// .then((response)=>{
//   if (response.ok){
//     alert("Recipe Deleted");
//   }
// });

//Calls the fetch to add the ingredients at launch - will need to implmenent
//The updated and delete as well - use this as a template
export const fetchPantryItems = (user) => (dispatch) => {
  fetch(baseUrl + "/recipe/pantry")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("This data is from pantry" + data);
      return dispatch(addIngredient(data));
    });
};

//Actioncreators for ingredients
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

//Action creators for Shopping List - change endpoint when shoppinglist endpoint
//is available - using pantry endpoint for now
export const fetchShoppingList = (user) => (dispatch) => {
  fetch(baseUrl + "/recipe/shoppinglist")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("This data is from fetchShoppingList: " + data);
      return dispatch(addShoppingList(data));
    });
};

export const addShoppingList = (shoppingList) => ({
  type: ActionTypes.ADD_SHOPPINGLIST,
  payload: shoppingList,
});
export const deleteShoppingList = (shoppingList) => ({
  type: ActionTypes.DELETE_SHOPPINGLIST,
  payload: shoppingList,
});
export const updateShoppingList = (shoppingList) => ({
  type: ActionTypes.UPDATE_SHOPPINGLIST,
  payload: shoppingList,
});

//Action creators for Mealplan
export const fetchMealPlan = () => (dispatch) => {
  fetch(baseUrl + "/recipe/breakfast")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("This data is from fetchMeals" + data);
      return dispatch(addMealPlan(data));
    });
};

export const addMealPlan = (mealplan) => ({
  type: ActionTypes.ADD_MEALPLAN,
  payload: mealplan,
});
export const deleteMealplan = (mealplan) => ({
  type: ActionTypes.DELETE_MEALPLAN,
  payload: mealplan,
});
export const updateMealPlan = (mealplan) => ({
  type: ActionTypes.UPDATE_MEALPLAN,
  payload: mealplan,
});

//can change this to fetch
export const newMealSelection = (day, mealtime, recipename) => (dispatch) => {
  const newMeal = {
    day: day,
    mealtime: mealtime,
    recipename: recipename,
  };
  dispatch(addMealSelection(newMeal));
};
export const addMealSelection = (newMeal) => ({
  type: ActionTypes.ADD_MEALSELECTION,
  payload: newMeal,
});

export const addPurchasedItem = (newitem) => ({
    type: ActionTypes.ADD_PURCHASED_ITEMS,
    payload: newitem,
  });

  export const deletePurchasedItem = (newitem) => ({
    type: ActionTypes.DELETE_PURCHASED_ITEMS,
    payload: newitem,
  });

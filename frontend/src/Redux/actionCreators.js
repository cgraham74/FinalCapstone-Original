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

//ADDED HEADERS AND TOKENS TO THE SERVER
export const fetchRecipes = (token) => async (dispatch) => {
  await fetch(baseUrl + "/recipe/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return dispatch(addRecipe(data));
    });
};

export const addRecipe = (recipes) => ({
  type: ActionTypes.ADD_RECIPE,
  payload: recipes,
});

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
    category, 
    token, 
    
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
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        alert("Saved!" + newRecipe);
        dispatch(fetchRecipes(token));
        return response;
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Could not save card!" + JSON.stringify(newRecipe));

    })
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
    category,
    token
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
    return await fetch(baseUrl + `/recipe/update/${recipeid}`, {
      method: "PUT",
      cache: "no-cache",
      body: JSON.stringify(updateRecipe),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Card updated!");
          dispatch(fetchRecipes(token))
          return response;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Could not update card!");
      });
  };

export const deleteRecipe = (id) => (dispatch) => {
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

//Calls the fetch to add the ingredients at launch
export const fetchPantryItems = (token) => async (dispatch) => {
  await fetch(baseUrl + "/recipe/pantry", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
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

//Action creators for Shopping List
export const fetchShoppingList = (token) => async (dispatch) => {
  await fetch(baseUrl + "/recipe/shoppinglist", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
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
export const fetchMealPlan = (token) => (dispatch) => {
  fetch(baseUrl + "/recipe/mealplan", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return dispatch(addMealSelections(data));
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
export const newMealSelection =
  (user, mealtime, day, recipename) => (dispatch) => {
    const newMealplan = {
      user_id: user,
      category: mealtime,
      dayofweek: day,
      recipename: recipename
    };
    dispatch(addMealSelection(newMealplan));
  };

export const changeMealSelection =
  (mealplanid, user, mealtime, day, recipename) => (dispatch) => {
    const newMealplan = {
      mealplanid: mealplanid,
      user_id: user,
      category: mealtime,
      dayofweek: day,
      recipename: recipename
    };
    dispatch(updateMealSelection(newMealplan));
  };
//-----------------------------------------
export const postNewMealSelection =
  (mealselection, token) => (dispatch) => {
    // Post a meal plan
    fetch(baseUrl + "/recipe/mealplan/save", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(mealselection),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Saved meal plan!");
          dispatch(fetchMealPlan(token));
          dispatch(fetchShoppingList(token));
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Could not save plan!");
      });
  };

//----------------------------
export const addMealSelections = (newMeal) => ({
  type: ActionTypes.ADD_MEALSELECTIONS,
  payload: newMeal,
});

export const addMealSelection = (newMeal) => ({
  type: ActionTypes.ADD_MEALSELECTION,
  payload: newMeal,
});
export const updateMealSelection = (newMeal) => ({
  type: ActionTypes.UPDATE_MEALSELECTION,
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

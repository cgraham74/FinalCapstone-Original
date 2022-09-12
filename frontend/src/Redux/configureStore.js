import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import { Recipes } from "./recipes"
import { Ingredient } from './ingredient'
import { Mealplan } from './mealplan'
import { ShoppingList } from './shoppinglist'
import { createForms } from 'react-redux-form';
import { CreatedRecipe } from './forms'
import { MealSelection } from './mealselection'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            mealselection: MealSelection,
            shoppinglist: ShoppingList,
            mealplan: Mealplan,
            ingredient: Ingredient,
            recipes: Recipes,
            token: Token,
            user: User,
            ...createForms({recipe: CreatedRecipe})
            
        }),
        applyMiddleware(thunk)
    );

    return store;
}
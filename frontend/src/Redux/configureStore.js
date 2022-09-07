import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import { Recipes } from "./recipes"
import { Ingredient } from './ingredient'
import { Mealplan } from './mealplan'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            mealplan: Mealplan,
            ingredient: Ingredient,
            recipes: Recipes,
            token: Token,
            user: User
        }),
        applyMiddleware(thunk)
    );

    return store;
}
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import { Recipes } from "./recipes"

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            recipes: Recipes,
            token: Token,
            user: User
        }),
        applyMiddleware(thunk)
    );

    return store;
}
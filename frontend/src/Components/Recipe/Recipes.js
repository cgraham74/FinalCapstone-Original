import React from 'react';
import SavedRecipes from './SavedRecipes'
import Navigator from '../navigation/Navigator';

export default function Recipes(props) {
    return(
        <div>
            <Navigator />
            <SavedRecipes recipes={props.recipes}/>
        </div>
    )
}
import React from 'react';
import SavedRecipes from './SavedRecipes'

export default function Recipes(props) {
    return(
        <div>
            {console.log(props.recipes)}
            <SavedRecipes recipes={props.recipes}/>
        </div>
    )
}
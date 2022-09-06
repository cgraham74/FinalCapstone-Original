import React from 'react';
import SavedRecipes from './SavedRecipes'
import Navigator from '../navigation/Navigator';

export default function Recipes(props) {
    return(
        <div>
            <Navigator />
            <div className="col-12 col-md-5 m-1">
            <SavedRecipes recipes={props.recipes}/>
            </div>
        </div>
    )
}
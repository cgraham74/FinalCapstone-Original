import React from "react";
import Navigator from "../navigation/Navigator";
import RecipeCard from "../Recipe/RecipeCard";
import "./pantry.css";

export default function AllRecipes(props) {
  return (
    <>
      <Navigator />
      <h3>All Recipes</h3>

      <RecipeCard
        allrecipes={props.allrecipes}
        //  recipeCard={item}
        token={props.token}
      />
    </>
  );
}

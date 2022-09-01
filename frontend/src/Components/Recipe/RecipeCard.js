

import React from "react";
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";

const RecipeCard = (props) => {

    //Code for after endpoint is created
    // const li = props.ingredients.map((ingredient, id)=> {

    //     return (
    //         <li key={id}>{ingredient}</li>
    //     )
    // })
        

  return (
    <>
      <Card id="recipe_card">
        {/* 
        Code after endpoints are created
        <CardBody>
          <CardTitle id="recipe_name">{props.recipeCard.recipeName}</CardTitle>
          <CardSubtitle>{props.recipeCard.recipeServing}</CardSubtitle>
          <CardText>
          <ul>
          {li}
          </ul>
          <p>{props.recipeCard.recipeInstructions}</p></CardText>
        </CardBody> */}
        <CardBody>
          <CardTitle id="recipe_name">Recipe name goes here</CardTitle>
          <CardSubtitle>Serving size: 5</CardSubtitle>
          <CardText>
            <ul>
                <li>First ingredient</li>
                <li>Second ingredient</li>
            </ul>
            <p>Instructions will go here go here</p>

          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default RecipeCard;
import React, { useState } from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import defaultImg from "../../images/default.png";
import { FaRegHeart } from "react-icons/fa";
import { Loading } from '../LoadingComponent';
function RenderAllRecipes({ recipeCard }) {
  const [ingredientList, setIngredientList] = useState(
    recipeCard.ingredientList);
  const [instructions, setInstructions] = useState(recipeCard.instructions);
  const [servingSize, setServingSize] = useState(recipeCard.servingSize);
  const [ingredientName, setIngredientName] = useState();
  const [ingredientQuantity, setIngredientQuantity] = useState();
  const [ingredientMeasurementUnit, setIngredientMeasurementUnit] = useState();

  function addIngredients(event) {
    if (
      ingredientName !== "" &&
      ingredientQuantity !== "" &&
      ingredientMeasurementUnit !== ""
    ) {
      event.preventDefault();
      setIngredientList(() => [
        ...ingredientList,
        {
          name: ingredientName,
          quantity: ingredientQuantity,
          measurementunit: ingredientMeasurementUnit,
        },
      ]);

      setIngredientName("");
      setIngredientQuantity("");
      setIngredientMeasurementUnit("");
    }
  }
  function fileExists() {
    try {
      let file = require(`../../images/${recipeCard.imageUrl}`).default;
      return true;
    } catch (err) {
      return false;
    }
  }
  const ingredients = recipeCard.ingredientList.map((item, index) => {
    return (
      <li key={index} id="ingredient">
        {item.name}: {item.quantity} {item.measurementunit}
      </li>
    );
  });

  return (
    <>
      <Card style={{ width: "30rem" }} id="recipecard">
        <CardBody>
          <CardTitle>
            <span>
            <h3>{recipeCard.title}</h3>
            <FaRegHeart id="save-heart"/></span>
          </CardTitle>
          <CardImg
            alt="not found"
            src={
              fileExists()
                ? require(`../../images/${recipeCard.imageUrl}`).default
                : defaultImg
            }
          />
          <CardSubtitle>
            Serving Size: {recipeCard.servingSize}
          </CardSubtitle>
          <h5>Ingredients:</h5>
          <ul>{ingredients}</ul>
          <h5>Instructions:</h5> {recipeCard.instructions}
        </CardBody>
      </Card>
    </>
  );
}

export default function RecipeCard(props) {
  const recipeAllCollections = props.allrecipes.map((item, id) => {
    return (
      <>
        <RenderAllRecipes 
        key={id} 
        recipeCard={item} 
        token={props.token} />
      </>
    );
  });
  if (props.allRecipesLoading ){
    return(
      <div>
        <Loading />
      </div>
    )
  } else {
  return <>{recipeAllCollections}</>;
}
}


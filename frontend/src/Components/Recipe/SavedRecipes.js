import React, { useCallback, useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
import "./recipe.css"
import { FadeTransform, Fade } from "react-animation-components";
import Navigator from "../navigation/Navigator";
import { baseUrl } from "../../Shared/baseUrl";
import { addToken } from "../../Redux/actionCreators";

function RenderSavedRecipes({ recipeCard, deleteHandler, editHandler }) {
    const ingredients = recipeCard[0].ingredientList.map((item, id) => {
        return(
            <>
            <li key={id} id="ingredient">
            <p>{item.name}: {item.quantity} {item.measurementunit}</p>
            {/* <p>{item.quantity}</p>
            <p>{item.measurementunit}</p> */}
            </li>
            </>
        )
    })
  return (
    <FadeTransform
      in
      transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
    >
      <Card>
        <CardBody>
            <CardTitle>{recipeCard[0].title}</CardTitle>
            <CardSubtitle>Serving Size: {recipeCard[0].servingSize}</CardSubtitle>
          <CardText>
            Ingredients:
            <ul>
            {ingredients}
            </ul>
            Instructions: {recipeCard[0].instructions}
            </CardText>
            <Button onClick={editHandler}>Update</Button>
            <Button onClick={deleteHandler}>Delete</Button>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

export default function SavedRecipes(props) {
   

//    const recipeCollections = props.recipes.map((card, id) => {
    return (
      <Fade in>
        {/* <div key={id}> */}
        <div>
          <RenderSavedRecipes
            deleteHandler={props.deleteHandler}
            editHandler={props.editHandler}
            recipeCard={props.recipes}
          />
        </div>
      </Fade>
    );
//    });
//    return <>{recipeCollections}</>;
}




// const [recipeCollection, setRecipeCollection] = useState([]);
// const [recipeCard, setRecipeCard] = useState({});
// const [isLoading, setIsLoading] = useState(false);
// const [isEdited, setIsEdited] = useState(false);


/**
* A function provided to delete unwanted recipes
*
* @param {*} event
* @param {*} id
*/
// function deleteHandler(event, id) {
// fetch(baseUrl + "/" + id, {
//   method: "DELETE",
//   cache: "no-cache",
//   headers: {
//     "Content-type": "application/json",
//     Authorization: `Bearer ${addToken}`,
//   },
// })
//   .then((response) => {
//     setIsLoading(!isLoading);
//     return response.text();
//   })
//   .then((data) => {
//     console.log(data);
//     alert("Recipe deleted!");
//   })
//   .catch((err) => {
//     console.error(err);
//     alert("Could not delete recipe!");
//   });
// }

// /**
// * Handler method to update a specific recipe
// * @param {*} event
// * @param {*} id
// */
// function editHandler(event, id) {
// fetch(baseUrl + "/" + id, {
//   method: "PUT",
//   cache: "no-cache",
//   headers: {
//     "Content-type": "application/json",
//     Authorization: `Bearer ${addToken}`,
//   },
//   body: JSON.stringify(recipeCard),
// })
//   .then((response) => {
//     if (response.ok) {
//       alert("Saved Recipe!");
//       setIsEdited(true);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//     alert("Could not save recipe");
//   });
// }


// /**
// * Fetch to get a single recipe by its id
// */
// const fetchRecipeCard = useCallback(() => {
// fetch(baseUrl + "/Test/RecipeTest")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => setRecipeCard(data));
// console.log("What is in recipe card" +recipeCard);
// }, []);

// /**
// *
// */
// const fetchCollection = useCallback(() => {
// fetch(baseUrl + "/Test/RecipeTest")
//   .then((response) => {
//     return response.json();  
//   })
//   .then((data) => setRecipeCollection(data));
//   console.log("What is in recipe collections" + recipeCollection);
// }, []);


// useEffect(() => {
// fetchCollection();
// }, [isLoading, isEdited, fetchCollection]);


// useEffect(() => {
// fetchRecipeCard();
// }, []);





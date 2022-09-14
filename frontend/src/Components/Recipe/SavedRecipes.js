import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
} from "reactstrap";
import "./recipe.css";
import { Link } from "react-router-dom";
import { Fade, Stagger } from "react-animation-components";
import { saveRecipe } from "../../Redux/actionCreators";
import CreateRecipe from "./CreateRecipe";

function RenderSavedRecipes({ recipeCard, deleteHandler, editHandler }) {
  // function RenderSavedRecipes({ recipeCard, deleteHandler, editHandler }) {
  const [modal, setModal] = useState(false);
  const [instructions, setInstructions] = useState(recipeCard.instructions);
  const [servingSize, setServingSize] = useState(recipeCard.servingSize);
  const [ingredientList, setIngredientList] = useState(recipeCard.ingredientList)
  const [ingredientName, setIngredientName] = useState();
  const [ingredientQuantity, setIngredientQuantity] = useState();
  const [ingredientMeasurementUnit, setIngredientMeasurementUnit] = useState();
  const [name, setName] = useState("");
  const toggle = () => setModal(!modal);

  const ingredientsModal = ingredientList.map((item, index) => { 
    //setIngredientName(item.name);   
    return (
      <>
      
      <li key={index} id="modal-ingredient">
        {/* {item.name}: {item.quantity} {item.measurementunit} */}
        <Input type ="text" defaultValue={item.name} onChange={(e) => setIngredientName(e.target.value)}></Input>
        <Input type ="text" defaultValue={item.quantity} onChange={(e) => setIngredientQuantity(e.target.value)}></Input>
        <Input type ="text" defaultValue={item.measurementunit} onChange={(e) => setIngredientMeasurementUnit(e.target.value)}></Input>
      </li>
      </>
    );
    // return (
      
    //   <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></Input>
      
    // )
  });

  const ingredients = recipeCard.ingredientList.map((item, index) => {
    return (
      
      
      <li key={index} id="ingredient">
        {item.name}: {item.quantity} {item.measurementunit}
      </li>
      
    );
  });

  function UpdateIngredients() {
    console.log("Clicked");
    setIngredientList(() => [
      ...ingredients,
      {
        name: ingredientName,
        quantity: ingredientQuantity,
        measurementunit: ingredientMeasurementUnit,
      },
    ]);
  }


  const populateModalWithRecipe = {
    recipeid: "",
    user_id: "",
    title: "pancake",
    imageUrl: "imageUrl",
    ingredientList: [],
    instructions: "",
    servingSize: "servingSize",
    category: "category",
  };

  return (
    <Fade in>
      <Card style={{ width: "30rem" }} id="recipecard">
        <CardBody>
          <CardTitle>
            <h3>{recipeCard.title}</h3>
          </CardTitle>
          {recipeCard.imageUrl && (
            <CardImg
              alt="not found"
              src={require(`../../images/${recipeCard.imageUrl}`).default}
            />
          )}
          <CardSubtitle>Serving Size: {recipeCard.servingSize}</CardSubtitle>
          {/* <CardText> */}
          <h5>Ingredients:</h5>
          <ul>{ingredients}</ul>
          <h5>Instructions:</h5> {recipeCard.instructions}
          {/* </CardText> */}
          <div id="recipe-update-delete">
            <Button onClick={toggle} id="update">
              {" "}
              Update
            </Button>

            <Modal isOpen={modal} toggle={toggle} {...recipeCard}>
              <ModalHeader toggle={toggle} id="modal-header">
                {recipeCard.title}
              </ModalHeader>
              <ModalBody id="modal-body"></ModalBody>
              <Form>
                <Label for="servingsize">Serving Size</Label>
                <Input type="number" name="servingsize" value={servingSize} onChange={(e) => setServingSize(e.target.value)}></Input>
                <Label>Ingredient List</Label>
                <ul>{ingredientsModal}</ul>
                <Label for="ingredients">Add Ingredient</Label>
                <Input type="text" name="ingredient" placeholder="Ingredient Name"onChange={(e) => setIngredientName(e.target.value)}></Input>
                <Input type="text" name="ingredient" placeholder="Quantity" onChange={(e) => setIngredientQuantity(e.target.value)}></Input>
                <Input type="text" name="ingredient" placeholder="Measurement Unit" onChange={(e) => setIngredientMeasurementUnit(e.target.value)}></Input>
                <Button type="button" onclick={() => UpdateIngredients()}>Add Ingredient</Button><br></br>
                <Label for="instructions">Instructions</Label>
                <Input
                  type="textarea"
                  name="instructions"
                  rows="9"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></Input>
              </Form>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Submit Changes
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            {/* <Button onClick={() => deleteHandler(recipeCard.recipeid)} id="delete">
              Delete
            </Button> */}
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
}

export default function SavedRecipes(props) {
  const recipeCollections = props.recipes.map((item, id) => {
    return (
      <>
        <Stagger in>
          <RenderSavedRecipes
            key={id}
            deleteHandler={props.deleteRecipe}
            // editHandler={props.editHandler}
            recipeCard={item}
          />
        </Stagger>
      </>
    );
  });
  return <>{recipeCollections}</>;
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

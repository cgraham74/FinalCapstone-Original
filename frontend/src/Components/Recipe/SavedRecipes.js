import React, { useCallback, useEffect, useState } from "react";
import {
  FaRegTrashAlt,
  FaRegCheckCircle,
  FaRegCheckSquare,
  FaRegTimesCircle,
  FaCircle,
} from "react-icons/fa";

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
  Table,
} from "reactstrap";
import "./recipe.css";
import { Link } from "react-router-dom";
import { Fade, Stagger } from "react-animation-components";
import {
  saveRecipe,
  updateRecipe,
  updatedRecipe,
} from "../../Redux/actionCreators";
import CreateRecipe from "./CreateRecipe";

function RenderSavedRecipes({ recipeCard, deleteHandler, editHandler }, props) {
  // function RenderSavedRecipes({ recipeCard, deleteHandler, editHandler }) {
  const [modal, setModal] = useState(false);
  const [instructions, setInstructions] = useState(recipeCard.instructions);
  const [servingSize, setServingSize] = useState(recipeCard.servingSize);
  const [ingredientList, setIngredientList] = useState(
    recipeCard.ingredientList
  );
  const [ingredientName, setIngredientName] = useState();
  const [ingredientQuantity, setIngredientQuantity] = useState();
  const [ingredientMeasurementUnit, setIngredientMeasurementUnit] = useState();
  // const [name, setName] = useState("");
  //const [addonIngredients, setAddoningredients] = useState([]);
  const toggle = () => setModal(!modal);

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

  function handleDelete(id, e) {
    setIngredientList(ingredientList.filter((v, i) => i !== id));
  }
  const addonIngredientsList = ingredientList.map((item, id) => {
    return (
      <>
        <tr className="rows" key={id}>
          <th scope="row">
            <FaCircle />
          </th>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.measurementunit}</td>
          <td>
            <FaRegTrashAlt id="trash" onClick={(e) => handleDelete(id, e)} />
          </td>
        </tr>
      </>
    );
  });
  // const ingredientsModal = ingredientList.map((item, index) => {
  //   //setIngredientName(item.name);
  //   return (
  //     <>
  //       <li key={index} id="modal-ingredient">
  //         {/* {item.name}: {item.quantity} {item.measurementunit} */}
  //         <Input
  //           type="text"
  //           defaultValue={item.name}
  //         onChange={(e) => {setIngredientName(e.target.value);}}
  //         ></Input>
  //         <Input
  //           type="text"
  //           defaultValue={item.quantity}
  //           onChange={(e) => setIngredientQuantity(e.target.value)}
  //         ></Input>
  //         <Input
  //           type="text"
  //           defaultValue={item.measurementunit}
  //           onChange={(e) => setIngredientMeasurementUnit(e.target.value)}
  //         ></Input>
  //       </li>
  //     </>
  //   );

  // });
  function handleUpdatedRecipe(values) {
    values.preventDefault();

    // recipeid,
    // user_id,
    // title,
    // imageUrl,
    // ingredientList,
    // instructions,
    // servingSize,
    // category

    //needs to convert follwing to updatedrecipe but recipeid and user_id is missing
    console.log(
      "update recipe" +
        recipeCard.title +
        "  " +
        recipeCard.imageUrl +
        " " +
        ingredientList +
        values.target.instructions.value +
        values.target.servingsize.value +
        " " +
        recipeCard.category
    );

    // const t = () => setModal(!modal);
    ingredientList.map((item) => {
      console.log("SavedRecipes: Ingredients map: " + item.name);
    });
  }
  const ingredients = recipeCard.ingredientList.map((item, index) => {
    return (
      <li key={index} id="ingredient">
        {item.name}: {item.quantity} {item.measurementunit}
      </li>
    );
  });

  // function UpdateIngredients() {
  //   console.log("Clicked");
  //   setIngredientList(() => [
  //     ...ingredients,
  //     {
  //       name: ingredientName,
  //       quantity: ingredientQuantity,
  //       measurementunit: ingredientMeasurementUnit,
  //     },
  //   ]);
  // }

  // const populateModalWithRecipe = {
  //   recipeid: "",
  //   user_id: "",
  //   title: "pancake",
  //   imageUrl: "imageUrl",
  //   ingredientList: [],
  //   instructions: "",
  //   servingSize: "servingSize",
  //   category: "category",
  // };

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
              <Form
                onSubmit={(values) => {
                  handleUpdatedRecipe(values);
                  setModal(!modal);
                }}
              >
                <Label for="servingsize">Serving Size</Label>
                <Input
                  type="number"
                  name="servingsize"
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                ></Input>
                <Label>Ingredient List</Label>
                {/* <ul>{ingredientsModal}</ul> */}
                <Label for="ingredients">Add Ingredient</Label>
                <Input
                  type="text"
                  name="ingredient"
                  placeholder="Ingredient Name"
                  onChange={(e) => setIngredientName(e.target.value)}
                ></Input>
                <Input
                  type="text"
                  name="ingredient"
                  placeholder="Quantity"
                  onChange={(e) => setIngredientQuantity(e.target.value)}
                ></Input>
                <Input
                  type="text"
                  name="ingredient"
                  placeholder="Measurement Unit"
                  onChange={(e) => setIngredientMeasurementUnit(e.target.value)}
                ></Input>
                <Button
                  type="button"
                  onClick={(event) => addIngredients(event)}
                >
                  Add Ingredient
                </Button>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Ingredients entered</th>
                      <th>Quantity entered</th>
                      <th>Measurement Unit entered</th>
                    </tr>
                  </thead>
                  <tbody>{addonIngredientsList}</tbody>
                </Table>
                <br></br>
                <Label for="instructions">Instructions</Label>
                <Input
                  type="textarea"
                  name="instructions"
                  rows="9"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></Input>

                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() =>
                      updatedRecipe(
                        recipeCard.recipeid,
                        recipeCard.user_id,
                         recipeCard.title,
                         recipeCard.imageUrl,
                        ingredientList,
                        instructions,
                        servingSize,
                        recipeCard.category,
                        props.token
                      )
                    }
                  >
                    Submit Changes
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
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
  // console.log(
  //   "SavedRecipe: Line 281: props.recipes.recipeid: " + props.recipes.recipeid
  // );
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

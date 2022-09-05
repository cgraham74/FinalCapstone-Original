import React, { useState } from "react";
import Navigator from "../navigation/Navigator";
import {
  Form,
  FormGroup,
  FormFeedback,
  Button,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap";
import { baseUrl } from "../../Shared/baseUrl";

export default function CreateRecipe(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [instructions, setInstruction] = useState("");
  const [category, setCategory] = useState("Category");
  const [recipe, setRecipe] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      recipeName +
        " " +
        servingSize +
        " " +
        instructions +
        " " +
        category +
        " " +
        JSON.stringify(ingredients) +
        " ID " +
        JSON.stringify(props)
    );
    setRecipe({
      user_id: props.user.id,
      title: recipeName,
      imageUrl: "",
      ingredientList: ingredients,
      instructions: instructions,
      servingSize: servingSize,
      category: category,
    });
    // fetch(baseUrl, {
    //   method: "POST",
    //   cache: "no-cache",
    //   headers: {
    //     "Content-Type": "application/json",
    //      "Authorization": `Bearer ${props.token}`
    //   },
    //   body: JSON.stringify(recipe),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       alert("Saved!");
    //       resetForm(e);
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     alert("Could not save card!");
    //   });
    
  }

  function resetForm(e) {
    setRecipe({});
    setIngredients([]);
    setCategory("Category");
    e.target.reset();
  }

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const ingredientsList = ingredients.map((item, id) => {
    return (
      <>
        <tr className="rows" key={id}>
          <th scope="row">{id + 1}</th>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.measurementunit}</td>
        </tr>
      </>
    );
  });

  function updateIngredients(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setIngredients((prevIngred) => [
        ...ingredients,
        {
          name: ingredientName,
          quantity: ingredientAmount,
          measurementunit: ingredientUnit,
        },
      ]);
      setIngredientName("");
      setIngredientAmount("");
      setIngredientUnit("");
    }
  }

  return (
    <div>
      <Navigator />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <Label for="recipename">
            Recipe name:
            <Input
              id="recipename"
              name="recipename"
              placeholder="Recipe name..."
              type="text"
              onChange={(e) => setRecipeName(e.target.value)}
            ></Input>
          </Label>
          <Label for="servingsize">
            Serving Size
            {/*TODO Put number validators on here */}
            <Input
              id="servingsize"
              name="servingsize"
              placeholder="Serving size..."
              type="text"
              onChange={(e) => setServingSize(e.target.value)}
            ></Input>
          </Label>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
            <DropdownToggle caret>{category}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="Breakfast" onClick={changeCategory}>
                Breakfast
              </DropdownItem>
              <DropdownItem value="Lunch" onClick={changeCategory}>
                Lunch
              </DropdownItem>
              <DropdownItem value="Dinner" onClick={changeCategory}>
                Dinner
              </DropdownItem>
              <DropdownItem value="Dessert" onClick={changeCategory}>
                Dessert
              </DropdownItem>
              <DropdownItem value="Snack" onClick={changeCategory}>
                Snacks
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* TODO: 
          ADD: validators for Quanity to be only numbers
          ADD: Delete function to be able to remove individual ingredient from list incase of ooopsies */}
          <FormGroup>
            <Label for="ingredients">
              Ingredients
              <Input
                id="ingredients"
                name="ingredients"
                type="text"
                onChange={(e) => setIngredientName(e.target.value)}
                value={ingredientName}
              />
            </Label>
            <Label for="quantity">
              Quantity
              <Input
                id="quantity"
                name="quantity"
                type="text"
                value={ingredientAmount}
                onChange={(e) => setIngredientAmount(e.target.value)}
              />
            </Label>
            <Label for="measurement">
              Measurement
              <Input
                id="measurement"
                name="measurement"
                type="text"
                value={ingredientUnit}
                onChange={(e) => setIngredientUnit(e.target.value)}
                onKeyDown={(event) => updateIngredients(event)}
              ></Input>
            </Label>

            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ingredient Name</th>
                  <th>Quantity</th>
                  <th>Measurement Unit</th>
                </tr>
              </thead>
              <tbody>{ingredientsList}</tbody>
            </Table>
          </FormGroup>

          <Label for="instructions">Instructions</Label>
          <Input
            id="instructions"
            name="instructions"
            type="textarea"
            onChange={(e) => setInstruction(e.target.value)}
          />
        </FormGroup>
        <Button
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

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
export default function CreateRecipe() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("");

  const ingredientsList = ingredients.map((item, id) => {
    return (
      <>
        <tr className="rows">
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
      setIngredients((prevIngred) => [
        ...ingredients,
        {
          name: ingredientName,
          quantity: ingredientAmount,
          measurementunit: ingredientUnit,
        },
      ]);
    }
  }

  return (
    <div>
      <Navigator />
      Placeholder for create recipes
      <Form>
        <FormGroup>
          <Label for="recipename">
            Recipe name:
            <Input
              id="recipename"
              name="recipename"
              placeholder="Recipe name..."
              type="text"
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
            ></Input>
          </Label>

          {/* Drop down menu for meal Category */}
          <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
            <DropdownToggle caret>Category</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Breakfast</DropdownItem>
              <DropdownItem>Lunch</DropdownItem>
              <DropdownItem>Dinner</DropdownItem>
              <DropdownItem>Dessert</DropdownItem>
              <DropdownItem>Snacks</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
            <Label for="amount">
              Amount
              <Input
                id="amount"
                name="amount"
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
          <Input id="instructions" name="text" type="textarea" />
        </FormGroup>
      </Form>
    </div>
  );
}

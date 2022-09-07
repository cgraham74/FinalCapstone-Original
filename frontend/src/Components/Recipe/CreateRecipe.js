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
  Col,
  Row,
} from "reactstrap";

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

  // const required = (val) => val && val.length;
  // const maxLength = (len) => (val) => !val || val.length <= len;
  // const minLength = (len) => (val) => val && val.length >= len;
  // const isNumber = (val) => !isNaN(Number(val));

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

  function addIngredients(event) {
    //If Ingredients fields are empty -
    if (
      ingredientName !== "" &&
      ingredientAmount !== "" &&
      ingredientUnit !== ""
    ) {
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
      <div className="col-12">
        <h3>Create Recipe</h3>
      </div>
      <div className="col-12 col-md-9" id="create-recipe-form">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Row className="form-group">
            <Label htmlFor="recipename" md={2}>
              Recipe name:
            </Label>
            <Col md={10}>
              <Input
                id="recipename"
                name="recipename"
                placeholder="Recipe name..."
                type="text"
                onChange={(e) => setRecipeName(e.target.value)}
              ></Input>
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={2}>
            <Label htmlFor="servingsize">
              Serving Size
            </Label>
            </Col>
            <Col md={7}>
              {/*TODO Put number validators on here */}
              <Input
                id="servingsize"
                name="servingsize"
                placeholder="Serving size..."
                pattern="[0-9]*"
                type="text"
                value={servingSize}
                onChange={(e) =>
                  setServingSize((v) =>
                    e.target.validity.valid ? e.target.value : v
                  )
                }
              >
                <FormFeedback>Enter a numeric value</FormFeedback>
              </Input>
            </Col>
        
<Col md={3}>
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
          </Col>
  </Row>
          {/* TODO: 
          ADD: validators for Quanity to be only numbers
          ADD: Delete function to be able to remove individual ingredient from list incase of ooopsies */}
          <Row className="form-group">
            <Col md={4}>
              <Label htmlFor="ingredients">Ingredient</Label>

              <Input
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredient name..."
                onChange={(e) => setIngredientName(e.target.value)}
                value={ingredientName}
              />
            </Col>
            <Col md={3}>
              <Label htmlFor="quantity">Quantity</Label>

              <Input
                id="quantity"
                name="quantity"
                type="text"
                pattern="[0-9]*"
                placeholder="Amount needed..."
                value={ingredientAmount}
                onChange={(e) =>
                  setIngredientAmount((v) =>
                    e.target.validity.valid ? e.target.value : v
                  )
                }
              />
            </Col>
            <Col md={4}>
              <Label for="measurement">Measurement</Label>

              <Input
                id="measurement"
                name="measurement"
                type="text"
                placeholder="Large, Tsp, Cup etc..."
                value={ingredientUnit}
                onChange={(e) => setIngredientUnit(e.target.value)}
              ></Input>
            </Col>
            <Col md={1}>
              <Button type="button" onClick={(event) => addIngredients(event)}>
                Add
              </Button>
            </Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ingredients entered</th>
                <th>Quantity entered</th>
                <th>Measurement Unit entered</th>
              </tr>
            </thead>
            <tbody>{ingredientsList}</tbody>
          </Table>

          <Label for="instructions">Instructions</Label>
          <Input
            id="instructions"
            name="instructions"
            type="textarea"
            placeholder="Cooking instructions..."
            rows="8"
            onChange={(e) => setInstruction(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

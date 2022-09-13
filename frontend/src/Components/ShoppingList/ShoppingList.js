import React, { useState } from "react";
import Navigator from "../navigation/Navigator";
import "./shoppinglist.css";
import {
  FaRegTrashAlt,
  FaRegCheckCircle
} from "react-icons/fa";

export default function ShoppingList(props) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [shoppingList, setShoppingList] = useState(props.shoppingList);

  //All things in here persist as an array of ingredients
  const purchasedIngredient = (ingredientName) => {
    if (selectedIngredients.includes(ingredientName)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredientName)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredientName]);
    }
  };

  console.log(
    "Selected ingredients line 17: Shopping List Component: " +
      selectedIngredients
  );

  const shoppingItem = shoppingList.map((item, index) => {
    return (
      <>
        <li key={index} id="shopping-list">
          <div
            onClick={() => {
              purchasedIngredient(item.ingredientName);
            }}
          >
            {selectedIngredients.includes(item.ingredientName) ? (
              <p style={{ textDecorationLine: "line-through", color: "grey" }}>
                <FaRegCheckCircle
                  id="checkcircle"
                  style={{ color: "#80F57E" }}
                />
                {item.ingredientName}
              </p>
            ) : (
              <p>
                <FaRegCheckCircle id="checkcircle" />
                {item.ingredientName}
              </p>
            )}
          </div>
          <div className="recipeTitle">{item.recipeTitle}</div>
          <div>{item.measurementUnit}</div>
          <FaRegTrashAlt className="hidebutton" id="trash" />
        </li>
      </>
    );
  });
  //display pantry items
  return (
    <>
      <Navigator />
      <h3>ShoppingList</h3>

      {props.shoppingList.length !== 0 && (
        <ul id="shopping-items">{shoppingItem} </ul>
      )}
    </>
  );
}

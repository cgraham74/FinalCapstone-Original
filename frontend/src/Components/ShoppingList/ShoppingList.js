import React, {useEffect} from "react";
import Navigator from "../navigation/Navigator";
import "./shoppinglist.css";
import { FaRegTrashAlt, FaRegCheckCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { fetchShoppingList } from "../../Redux/actionCreators";


export default function ShoppingList(props) {
  //All things in here persist as an array of ingredients
  const purchasedIngredient = (ingredientName) => {
    if (props.purchaseditems.includes(ingredientName)) {
      props.deletePurchasedItem(ingredientName);
    } else {
      props.addPurchasedItem(ingredientName);
    }
  };

  //DO NOT DELETE THIS PLEASE
  function submitPurchasedItems() {

  }

  const shoppingItem = props.shoppingList.map((item, index) => {
    return (
      <>
        <li key={index} id="shopping-list">
          <div
            onClick={() => {
              purchasedIngredient(item.ingredientName);
            }}
          >
            {props.purchaseditems.includes(item.ingredientName) ? (
              <p style={{ textDecorationLine: "line-through", color: "grey" }} className="shopping-list-item">
                <FaRegCheckCircle
                  id="checkcircle"
                  style={{ color: "#80F57E" }}
                />
                {item.ingredientName}
              </p>
            ) : (
              <p className="shopping-list-item">
                <FaRegCheckCircle id="checkcircle" />
                {item.ingredientName}
              </p>
            )}
          </div>
          <div className="recipeTitle">{item.recipeTitle}</div>
          <div>{item.measurementUnit}</div>
          <FaRegTrashAlt
            className="hidebutton"
            id="trash"
            onClick={() => props.deleteShoppingList(item.ingredientName)}
          />
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
      <br></br>
      <Button onClick={() => submitPurchasedItems()}>Submit Purchases</Button>
    </>
  );

}

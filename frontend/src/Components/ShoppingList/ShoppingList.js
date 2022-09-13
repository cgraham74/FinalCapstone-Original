import React, { useState } from "react";
import Navigator from "../navigation/Navigator";
import "./shoppinglist.css";
import {
  FaRegTrashAlt,
  FaRegCheckCircle,
  FaRegCheckSquare,
  FaRegTimesCircle,
} from "react-icons/fa";

export default function ShoppingList(props) {
  const[selectedIngredients, setSelectedIngredients] =useState([]);
const [shoppingList,setShoppingList] = useState(props.shoppingList);
  const addIngredient=(ingredientName)=>{
   alert(ingredientName);
   setSelectedIngredients(...selectedIngredients,ingredientName);
 console.log(selectedIngredients)
  }

  function showselectedshoppinglist(){
    selectedIngredients.map((item, index) => {
     alert(item)
    })
  }
  const shoppingItem = shoppingList.map((item, index) => {
    return (
      <>
        {/* <tr className="rows" key={index}>
          <td>{item.ingredient}</td>
          <td>{item.quantity}</td>
          <td>{item.measurementunit}</td>
          <td><FaRegCheckCircle id="checkcircle"/></td>
          <td><FaRegCheckSquare id="checksquare" /></td>
          <td><FaRegTrashAlt id="trash"/></td>
          <td><FaRegTimesCircle/></td>
        </tr> */}
        <li key={index} id="shopping-list">
          <div onClick={()=>{addIngredient(item.ingredientName)}}>
            <FaRegCheckCircle className="hidebutton" id="checkcircle"/>
            {item.ingredientName}
          </div>
          <div className="recipeTitle">{item.recipeTitle}</div>
          <div>{item.measurementUnit}</div>
          {/* <div className="trash"><FaRegTrashAlt id="trash"/></div> */}
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
      {/* <Table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead> */}

      {props.shoppingList.length !== 0 && (
        <ul id="shopping-items">{shoppingItem} </ul>
        
      )}

      {/* </Table> */
      selectedIngredients.length !== 0 && (
        <ul id="selected-items">{showselectedshoppinglist} </ul>
      )}
    </>
  );
  //function to remove pantry items
  //function removePantryItem(){

  //}
}

import React, { useState } from "react";
import Navigator from "../navigation/Navigator";
import "./shoppinglist.css";
import {FaRegTrashAlt, FaRegCheckCircle, FaRegCheckSquare, FaRegTimesCircle} from "react-icons/fa"


export default function ShoppingList(props) {

  const shoppingItem = props.shoppingList.map((item, index) => {
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
       <div><FaRegCheckCircle id="checkcircle"/> 
          {item.ingredientName}  
       </div> 
        <div>{item.recipeTitle}</div>
         <div>{item.measurementUnit}</div>
        {/* <div className="trash"><FaRegTrashAlt id="trash"/></div> */}
        <FaRegTrashAlt id="trash"/>
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
       
        {props.shoppingList.length !== 0 &&  <ul id="shopping-items">{shoppingItem} </ul>}
       
      {/* </Table> */}
    </>
  );
  //function to remove pantry items
  //function removePantryItem(){

  //}
}

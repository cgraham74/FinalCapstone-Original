import React from "react";
import Navigator from "../navigation/Navigator";
import "./pantry.css";

export default function Pantry(props) {
  //   const [ingredients, setIngredients] = useState([])
    const pantryItems = props.ingredient.map((item, index) => {
      return (
        <li key={index} id="pantry-list">
          {item.ingredient}: {item.quantity} {item.measurementUnit}
        </li>
      );
    });
 
    //display pantry items
    return (
      <>
        <Navigator />
        <h3>Pantry</h3>
        
        {props.ingredient.length !== 0 ? <ul id="pantry-items">{pantryItems}</ul> : <p>No items in pantry</p>}
        
      </>
    );

}

import React, {useState} from 'react';
import Navigator from '../navigation/Navigator'
import {Card,CardBody,CardText,CardTitle,CardSubTitle} from 'reactstrap'
import { baseUrl } from '../../Shared/baseUrl';


export default function Pantry(props){
//   const [ingredients, setIngredients] = useState([])
//functionality to add items to pantry from endpoint

    const pantryItems = props.ingredient.map((item, id) => {
      console.log("from inside pantryItems map" + item)
      return (
        <>
          <div key={id}>
            <li>{item.ingredient}</li>
            <li>{item.quantity}</li>
            <li>{item.measurementUnit}</li>
          </div>
        </>
      );
      });
//display pantry items
return(
  <>
      <Navigator />
      <h2>Pantry</h2>
      <ul id= "pantry--items">{pantryItems}</ul>
  </>
)
//function to remove pantry items
//function removePantryItem(){

//}
}
import React, { useState, useEffect } from "react";
import Navigator from "../navigation/Navigator";
import { useLocation } from "react-router-dom";
import {useSelector} from 'react-redux';
import Meal from "../Day/Meal";
import Cart from "../Day/Cart";

export default function DayTest(props) {
    const location = useLocation();
const [posts, setPosts] = useState([]);
const state = useSelector((state) => state);
useEffect(()=>{
  const mealplan = state.mealplan.mealplan;
  console.log(mealplan)
  setPosts(mealplan);
 },[]);

  const pantryItems = props.ingredient.map((item, index) => {
    return (
      <li key={index} id="pantry-list">
        {item.ingredient}: {item.quantity} {item.measurementUnit}
      </li>
    );
  });

  return (
    <>
      <Navigator />
      <h3>Available {location.state.meal} item for {location.state.day} is:</h3>
      <ul id="pantry-items">{pantryItems}</ul>

      <div className="container" >
        <br />
        {posts.map((post) => {
          //alert(JSON.stringify(post))
          return (
          <div>
              <Meal meal={post} ></Meal>              
          </div> 
          );
        })}
         <aside><Cart/></aside>
      </div>
    </>
  );
}

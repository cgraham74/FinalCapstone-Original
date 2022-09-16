import React, { useState, useEffect } from "react";
import Navigator from "../navigation/Navigator";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Day(props) {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const state = useSelector((state) => state);

  useEffect(() => {
    const mealplan = state.mealplan.mealplan;
    setPosts(mealplan);
  }, []);

  function addUpdateMealSelection(day, time, meal) {
    let match = false;
    if (props.mealselection.length === 0) {
      console.log("Array is empty " + meal)
       return props.newMealSelection(
        day,
        time,
        meal
      );
    } 
    props.mealselection.map((item) => {
      
      if (
        item.day === day &&
        item.mealtime === time
      ) {
        console.log("found matach")
        match = true;
        return props.changeMealSelection(
          day,
          time,
          meal
        );
      }});  
      if(!match) {
        console.log("No match: "+ meal)
         return props.newMealSelection(
          day,
          time,
          meal
        );
         }
  }

  const mealItems = posts.map((item, index) => {
    return (
      <li key={index} id="pantry-list">
        {item}
        <Link to="/weeklyplanner">
          <FaPlusCircle onClick={() => addUpdateMealSelection(location.state.day, location.state.meal, item)} />
        </Link>
      </li>
    );
  });

  return (
    <>
      <Navigator />
      <h3>
        Available {location.state.meal} item for {location.state.day} is:
      </h3>
      <ul id="pantry-items">{mealItems}</ul>
    </>
  );
}

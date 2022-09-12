import React, { useState, useEffect } from "react";
import Navigator from "../navigation/Navigator";
import { useLocation } from "react-router-dom";
import {useSelector} from 'react-redux';
import { FaPlusCircle } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function DayTest(props) {
const location = useLocation();
const [posts, setPosts] = useState([]);
const state = useSelector((state) => state);

useEffect(()=>{
  const mealplan = state.mealplan.mealplan;
  setPosts(mealplan);
 },[]);

  const mealItems = posts.map((item, index) => {
    return (
      <li key={index} id="pantry-list">
        {item}
        <Link to="/weeklyplanner"><FaPlusCircle onClick={() => props.newMealSelection(location.state.day, location.state.meal, item)}/></Link>
      </li>
    );
  });

  return (
    <>
      <Navigator />
      <h3>Available {location.state.meal} item for {location.state.day} is:</h3>
      <ul id="pantry-items">{mealItems}</ul>
    </>
  );
}

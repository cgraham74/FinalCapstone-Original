import React from "react";
import "./landingpage.css";
import yellowdot from "../../images/yellowdot.png";
import bluedot from "../../images/bluedot.png";
import greendot from "../../images/greendot.png";
import purpledot from "../../images/purpledot.png";
import orangedot from "../../images/orangedot.png";
import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <div>
      <ul>
        <li id="li_weekly">
          <img src={yellowdot} alt="large yellow ellipse" />
          <Link to="/weeklyplanner">Weekly Planner</Link>
        </li>
        <li id="li_saved">
          <img src={orangedot} alt="large orange dot" />
         <Link to='savedrecipes'>Saved Recipes</Link> 
        </li>
        <li id="li_pantry">
          <img src={greendot} alt="large green dot" />
          <Link to='Pantry' >Pantry</Link>
        </li>
        <li id="li_shopping">
          <img src={bluedot} alt="large blue dot" />
          <Link to='shoppinglist'>Shopping List</Link>
        </li>
        <li id="li_create">
          <img src={purpledot} alt="large purple dot" />
         <Link to='createrecipe'>Create Recipe</Link> 
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import Navigator from "../navigation/Navigator";
import { Link } from "react-router-dom";
import { useState } from "react";
import yellowdot from "../../images/yellowdot.png";
import bluedot from "../../images/bluedot.png";
import greendot from "../../images/greendot.png";
import purpledot from "../../images/purpledot.png";
import orangedot from "../../images/orangedot.png";

export default function WeeklyPlanner() {
  const [day, setDay] = useState("");
 
  return (
    <div>
      <Navigator />
      <div>
        <ul>
          <li id="monday">
            <Link to="/day" onClick={(e) => setDay(e.target.innerText)} >
              Monday
            </Link>
          </li>
          <li id="tuesday">
            <Link to="/duesday" onClick={(e) => setDay(e.target.innerText)}>
              Tuesday
            </Link>
          </li>
          <li id="wednesday">
            <Link to="/dednesday" onClick={(e) => setDay(e.target.innerText)}>
              Wednesday
            </Link>
          </li>
          <li id="thursday">
            <Link to="/thursday" onClick={(e) => setDay(e.target.innerText)}>
              Thursday
            </Link>
          </li>
          <li id="friday">
            <Link to="/friday" onClick={(e) => setDay(e.target.innerText)}>
              Friday
            </Link>
          </li>
          <li id="saturday">
            <Link to="/saturday" onClick={(e) => setDay(e.target.innerText)}>
              Saturday
            </Link>
          </li>
          <li id="sunday">
            <Link to="/sunday" onClick={(e) => setDay(e.target.innerText)}>
              Sunday
            </Link>
          </li>
        </ul>
      </div>  
    </div>
  );
}

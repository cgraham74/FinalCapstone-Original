import React from "react";
import Navigator from "../navigation/Navigator";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function WeeklyPlanner() {
  const [day, setDay] = useState("");
 
  return (
    <div>
      <Navigator />
      <div>
        <ul>
          <li>
            <Link to="/Monday" onClick={(e) => setDay(e.target.innerText)} >
              Monday
            </Link>
          </li>
          <li>
            <Link to="/Tuesday" onClick={(e) => setDay(e.target.innerText)}>
              Tuesday
            </Link>
          </li>
          <li>
            <Link to="/Wednesday" onClick={(e) => setDay(e.target.innerText)}>
              Wednesday
            </Link>
          </li>
          <li>
            <Link to="/Thursday" onClick={(e) => setDay(e.target.innerText)}>
              Thursday
            </Link>
          </li>
          <li>
            <Link to="/Friday" onClick={(e) => setDay(e.target.innerText)}>
              Friday
            </Link>
          </li>
          <li>
            <Link to="/Saturday" onClick={(e) => setDay(e.target.innerText)}>
              Saturday
            </Link>
          </li>
          <li>
            <Link to="/Sunday" onClick={(e) => setDay(e.target.innerText)}>
              Sunday
            </Link>
          </li>
        </ul>
      </div>  
    </div>
  );
}

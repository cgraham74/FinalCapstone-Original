import React from "react";
import { Link } from "react-router-dom";
import yellowdot from "../../images/yellowdot.png";
import bluedot from "../../images/bluedot.png";
import greendot from "../../images/greendot.png";
import purpledot from "../../images/purpledot.png";
import orangedot from "../../images/orangedot.png";

function weeklyplanner() {
  return (
    <div>
      <h1> Weekly Planner</h1>
      <div className="weeklycontaner">
        <ul>
          <li id="monday">
            <img src={yellowdot} alt="large yellow dot" />
            <Link to="/day" onClick={(e) => setDay(e.target.innerText)}>
              Monday
            </Link>
          </li>

          <li id="tuesday">
            <img src={orangedot} alt="large orange dot" />
            <Link to="/day" onClick={(e) => setDay(e.target.innerText)}>
              Tuesday
            </Link>
          </li>
          <li id="wednesday">
            <img src={greendot} alt="large green dot" />
            <Link to="/day" onClick={(e) => setDay(e.target.innerText)}>
              Wednesday
            </Link>
          </li>
          <li id="thursday">
            <img src={bluedot} alt="large blue dot" />
            <Link to="/day" onClick={(e) => setDay(e.target.innerText)}>
              Thursday
            </Link>
          </li>
          <li id="friday">
            <img src={purpledot} alt="large purple dot" />
            <Link to="/day" onClick={(e) => setDay(e.target.innerText)}>
              Friday
            </Link>
          </li>
          <li id="saturday">
            <img src={purpledot} alt="large purple dot" />
            <Link to="/day" onClick={(e) => setDay(e.target.innerText)}>
              Saturday
            </Link>
          </li>
          <li id="sunday">
            <img src={purpledot} alt="large purple dot" />
            <Link to="/day" onClick={(e) => setDay(e.target.innerText)}>
              Sunday
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default weeklyplanner;

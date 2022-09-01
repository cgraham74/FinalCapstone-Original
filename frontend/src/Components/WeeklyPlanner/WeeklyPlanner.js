 import React from "react";
import {Link} from 'react-router-dom';
 import yellowdot from '../../images/yellowdot.png'
import bluedot from '../../images/bluedot.png'
import greendot from '../../images/greendot.png'
import purpledot from '../../images/purpledot.png'
import orangedot from '../../images/orangedot.png'

 function weeklyplanner(){
    return(
        <div> 
            <h1> Weekly Planner</h1>
            <div className="weeklycontaner">
            <ul>
              <Link to="/weeklyplanner" className="link">
                    <li id='li_weekly'>
                        <img src={yellowdot} alt='large yellow ellipse'/>
                    Monday 
                    </li>
                </Link>
                <li id='li_saved'>
                <img src={orangedot} alt='large orange dot'/>
                    Tuesday
                </li>
                <li id='li_pantry'>
                <img src={greendot} alt='large green dot'/>
                    Wednesday
                </li>
                <li id='li_shopping'>
                <img src={bluedot} alt='large blue dot'/>
                    Thursday
                </li>
                <li id='li_create'>
                <img src={purpledot} alt='large purple dot'/>
                    Friday
                </li>
                <li id='li_create'>
                <img src={purpledot} alt='large purple dot'/>
                    Saturday
                </li>
                <li id='li_create'>
                <img src={purpledot} alt='large purple dot'/>
                    Sunday
                </li>
            </ul>

            </div>

        </div>

    )
}

 export default  weeklyplanner;
import React from 'react';
import './landingpage.css';
import yellowdot from '../../images/yellowdot.png'
import bluedot from '../../images/bluedot.png'
import greendot from '../../images/greendot.png'
import purpledot from '../../images/purpledot.png'
import orangedot from '../../images/orangedot.png'

import { Link } from 'react-router-dom';


export default function LandingPage(){

    return (
        <div>
            <ul>
              <Link to="/weeklyplanner" className="link">
                    <li id='li_weekly'>
                        <img src={yellowdot} alt='large yellow ellipse'/>
                    Weekly Planner 
                    </li>
                </Link>
                <li id='li_saved'>
                <img src={orangedot} alt='large orange dot'/>
                    Saved Recipes
                </li>
                <li id='li_pantry'>
                <img src={greendot} alt='large green dot'/>
                    Pantry
                </li>
                <li id='li_shopping'>
                <img src={bluedot} alt='large blue dot'/>
                    Shopping List
                </li>
                <li id='li_create'>
                <img src={purpledot} alt='large purple dot'/>
                    Create Recipe
                </li>
            </ul>
        </div>
    )
}
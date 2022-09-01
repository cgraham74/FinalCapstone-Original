import React from "react";
import { ButtonGroup, Button } from 'reactstrap'
import './navigation.css';
import { Link } from "react-router-dom";

function Navigator () {

    return (
        <nav id="navigation_container">
            <h1>Meal Planner</h1>
            <div id='nav_container'>
                <ButtonGroup id="nav_btngrp">
                    <Button id="nav_planner"><Link to='/weeklyplanner'>Planner</Link></Button>
                    <Button id="nav_recipes"><Link to='/savedrecipes'>Recipes</Link></Button>
                    <Button id="nav_pantry"><Link to='/pantry'>Pantry</Link></Button>
                    <Button id="nav_shopping"><Link to='/shoppinglist'>Shopping</Link></Button>
                </ButtonGroup>
            </div>
        </nav>
    )
}

export default Navigator;
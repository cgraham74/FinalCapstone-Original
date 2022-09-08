import React from "react";
import { ButtonGroup, Button } from 'reactstrap'
import './navigation.css';

function Navigator (props) {

    return (
        <nav>
            <h1>Meal Planner</h1>
            <div id='nav_container'>
                <ButtonGroup id="nav_btngrp">
                    <Button id="nav_planner">Planner</Button>
                    <Button id="nav_recipes">Recipes</Button>
                    <Button id="nav_pantry">Pantry</Button>
                    <Button id="nav_shopping">Shopping</Button>
                </ButtonGroup>
            </div>
        </nav>
    )
}

export default Navigator
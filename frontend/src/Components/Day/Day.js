import { React, useState, useEffect } from "react";
import Navigator from "../navigation/Navigator";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";
import { Button, Card, CardBody, CardGroup, CardTitle, Col } from "reactstrap";
import "./day.css";
import Meal from "./Meal";
import Cart from "./Cart";
import {connect, useDispatch, useSelector} from 'react-redux';
import {fetchMealPlan} from '../../Redux/actionCreators'



 export default function Day(props) {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  console.log(props);
//////////////////
  const dispatch= useDispatch();
  const state = useSelector((state) => state);
  useEffect(()=>{
   const mealplan = state.mealplan.mealplan;
   console.log(mealplan)
   setPosts(mealplan);
  },[]);
  
  //alert(state)
  // useEffect(() => {
  //   fetch(baseUrl + "/Test/RecipeListTest")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  return (
    <>
      <Navigator />

      <h1 id="meal-day">
        Available {location.state.meal} item for {location.state.day} is:
      </h1>

      <div className="container" >
        <br />
        {posts.map((post) => {
          //alert(JSON.stringify(post))
          return (
          <div>
              <Meal meal={post} ></Meal>              
          </div> 
          );
        })}
         <aside><Cart/></aside>
      </div>
      
    </>
  );
}

//export default connect(null,null)(Day);
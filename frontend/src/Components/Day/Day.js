import { React, useState, useEffect } from "react";
import Navigator from "../navigation/Navigator";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";

export default function Day(props) {
  const location = useLocation();
  //const { day } = location.state;

  const [newRecipes, setnewRecipes] = useState([{}]);
  const [posts, setPosts] = useState([]);
   
  //  useEffect(() => {
  //     let mounted= true;

  //     getRecipes().then(data=>{
  //       if(mounted){
  //         setnewRecipes(data);
  //         alert(newRecipes)
  //       }
  //     })
  //     return()=>mounted=false;
  //  }, []);

  //  async function getRecipes(){
  //   return fetch(baseUrl+'/Test/RecipeListTest')
  //         .then(response=>{
  //           if(response.ok){
  //             alert("successful")
  //           }
  //         })
  //         .then(response=>response.json());
  //  }
   useEffect(() => {
    fetch(baseUrl+'/Test/RecipeListTest')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
          
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  return (
    <>
      <Navigator />
      
      <h1>selected day is {location.state.day}</h1>
      <h1>selected meal is {location.state.meal}</h1>
      <div>
        {posts.map((post)=>{
            return(
            <h1>available meal {post.title}</h1>)
        })}
      </div>
      
    </>
  );
}

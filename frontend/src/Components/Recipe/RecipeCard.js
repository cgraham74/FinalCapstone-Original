import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import React, { useState, useEffect } from "react";
import defaultImg from "../../images/default.png";
import { FaHeart } from "react-icons/fa";
import { Loading } from "../LoadingComponent";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";

function RenderAllRecipes({ recipeCard, user, token, saveRecipe, imgUrls }) {
  let image;

  function handleClick(e) {
    e.preventDefault();
    console.log(user.id + " " + token);
    saveRecipe(
      user.id,
      recipeCard.title,
      recipeCard.imageUrl,
      recipeCard.ingredientList,
      recipeCard.instructions,
      recipeCard.servingSize,
      recipeCard.category,
      token
    );
  }

  // function fileExists() {
  //   try {
  //     let file = require(`../../images/${recipeCard.imageUrl}`).default;
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }
  // }

  function fileExists() {
    let isExist = false;
 
     console.log("recipe: " + recipeCard.imageUrl);
     imgUrls.map((url)=>{
      if(url===recipeCard.imageUrl) {
        image = url;
        isExist = true;
      }
     });
    return isExist;
  }


  const ingredients = recipeCard.ingredientList.map((item, index) => {
    return (
      <li key={index} id="ingredient">
        {item.name}: {item.quantity} {item.measurementunit}
      </li>
    );
  });

  return (
    <>
      <Card style={{ width: "30rem" }} id="recipecard">
        <CardBody>
          <CardTitle>
            <div id="cardtitle">
              <h3>{recipeCard.title}</h3>
              <FaHeart
                className="fas fa-heart fa-2x"
                id="save-heart"
                onClick={(e) => handleClick(e)}
              />
            </div>
          </CardTitle>
          <CardImg
                alt="not found"
                src={fileExists() ? image : defaultImg }
          />
          <CardSubtitle>Serving Size: {recipeCard.servingSize}</CardSubtitle>
          <h5>Ingredients:</h5>
          <ul>{ingredients}</ul>
          <h5>Instructions:</h5> {recipeCard.instructions}
        </CardBody>
      </Card>
    </>
  );
}

export default function RecipeCard(props) {

  const imagesListRef = ref(storage, "images/");
  const [imageUrls, setImageUrls] = useState([]);
   useEffect(() => {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
            console.log(url);
          });
        });
      });
    }, []);

    const filterCollection = props.allrecipes.filter(
    (item) => item.user_id !== props.user.id
  );
  const recipeAllCollections = filterCollection.map((item, id) => {
    return (
      <>
        <RenderAllRecipes
          key={id}
          user={props.user}
          saveRecipe={props.saveRecipe}
          recipeCard={item}
          token={props.token}
          imgUrls={imageUrls}
        />
      </>
    );
  });
  if (props.allRecipesLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return <>{recipeAllCollections}</>;
  }
}

import React from "react";
import SavedRecipes from "./SavedRecipes";
import Navigator from "../navigation/Navigator";
import { useState, useCallback, useEffect } from "react";

const BASE_URL ="#";

 const Recipe = () => {
    const [recipeCollection, setRecipeCollection] = useState("");
    const[recipeCard, setRecipeCard] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isEdited, setIsEdited] = useState(false);

    /**
     * A function provided to delete unwanted recipes
     * 
     * @param {*} event 
     * @param {*} id 
     */
    function deleteHandler(event, id) {
        fetch(BASE_URL + "/" + id, {
          method: "DELETE",
        })
          .then((response) => {
            setIsLoading(!isLoading);
            return response.text();
          })
          .then((data) => {
            console.log(data);
            alert("Recipe deleted!");
          })
          .catch((err) => {
            console.error(err);
            alert("Could not delete Recipe!");
          });
      }

      function editHandler(event, id){

      }

      /**
       * 
       */
      const fetchCollection = useCallback(() => {
        fetch(BASE_URL)
          .then((response) => {
            return response.json();
          })
          .then((data) => setRecipeCollection(data));
      
      }, []);

      
  useEffect(() => {
    fetchCollection();
  }, [isLoading, isEdited, fetchCollection]);
  return (
    <>
      <Navigator />
      <SavedRecipes 
    recipeCard={recipeCard}
    recipeCollection={recipeCollection}
    deleteHandler={deleteHandler}
    editHandler={editHandler}
    />
    </>
  );
}

export default Recipe;
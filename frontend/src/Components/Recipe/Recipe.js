import React from "react";
import SavedRecipes from "./SavedRecipes";
import Navigator from "../navigation/Navigator";
import { useState, useCallback, useEffect } from "react";
import { addToken } from "../../Redux/actionCreators";
import { baseUrl } from "../../Shared/baseUrl";

const Recipe = () => {
  const [recipeCollection, setRecipeCollection] = useState("");
  const [recipeCard, setRecipeCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  /**
   * A function provided to delete unwanted recipes
   *
   * @param {*} event
   * @param {*} id
   */
  function deleteHandler(event, id) {
    fetch(baseUrl + "/" + id, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${addToken}`,
      },
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
        alert("Could not delete recipe!");
      });
  }

  /**
   * Handler method to update a specific recipe
   * @param {*} event
   * @param {*} id
   */
  function editHandler(event, id) {
    fetch(baseUrl + "/" + id, {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${addToken}`,
      },
      body: JSON.stringify(recipeCard),
    })
      .then((response) => {
        if (response.ok) {
          alert("Saved Recipe!");
          setIsEdited(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Could not save recipe");
      });
  }

  /**
   * Fetch to get a single recipe by its id
   */
  const fetchRecipeCard = useCallback((id) => {
    fetch(baseUrl + "/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => setRecipeCard(data));
    console.log(recipeCard);
  }, []);

  /**
   *
   */
  const fetchCollection = useCallback(() => {
    fetch(baseUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => setRecipeCollection(data));
  }, []);

  useEffect(() => {
    fetchRecipeCard();
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
};

export default Recipe;

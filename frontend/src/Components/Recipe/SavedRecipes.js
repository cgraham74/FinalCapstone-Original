import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
import { FadeTransform, Fade } from "react-animation-components";
import Navigator from "../navigation/Navigator";

function RenderSavedRecipes({ cards, deleteHandler, editHandler }) {
  return (
    <FadeTransform
      in
      transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
    >
      <Card>
        <CardBody>
            <CardTitle>Recipe Name</CardTitle>
            <CardSubtitle>Servings</CardSubtitle>
          <CardText>
            Ingredients
            Recipe Instructions
            </CardText>
            <Button>Update</Button>
            <Button>Delete</Button>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

export default function SavedRecipes(props) {
  const recipeCollection = props.collection.map((cards, id) => {
    return (
      <Fade in>
        <div key={id}>
          <RenderSavedRecipes
            deleteHandler={props.deleteHandler}
            editHandler={props.editHandler}
            cards={cards}
          />
        </div>
      </Fade>
    );
  });
  return <>{recipeCollection}</>;
}

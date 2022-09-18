import { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import {
  addToken,
  deleteUser,
  fetchMealPlan,
  fetchPantryItems,
  fetchRecipes,
  saveRecipe,
  fetchShoppingList,
  deleteRecipe,
  updatedRecipe,
  newMealSelection,
  deleteShoppingList,
  deletePurchasedItem,
  addPurchasedItem,
  postNewMealSelection,
  changeMealSelection
} from "../../Redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WeeklyPlanner from "../WeeklyPlanner/WeeklyPlanner";
import Recipes from "../Recipe/Recipes";
import ShoppingList from "../ShoppingList/ShoppingList";
import Pantry from "../Pantry/Pantry";
import CreateRecipe from "../Recipe/CreateRecipe";
import Day from "../Day/Day";


const mapStateToProps = (state) => {
  return {
    purchaseditems: state.purchaseditems,
    mealselection: state.mealselection,
    shoppinglist: state.shoppinglist,
    mealplan: state.mealplan,
    ingredient: state.ingredient,
    recipes: state.recipes,
    token: state.token,
    user: state.user,
    saveRecipe: state.saveRecipe,
  };
};

//REMEMBER TO ADD TOKENS
const mapDispatchToProps = (dispatch) => ({
  addToken: () => {
    dispatch(addToken());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
  fetchRecipes: (token) => {
    dispatch(fetchRecipes(token));
  },

  fetchPantryItems: (token) => {
    dispatch(fetchPantryItems(token));
  },
  fetchMealPlan: (token) => {
    dispatch(fetchMealPlan(token));
  },
  //Removed User from fetchShoppingList
  fetchShoppingList: (token) => {
    dispatch(fetchShoppingList(token));
  },
  saveRecipe: (
    user_id,
    title,
    imageUrl,
    ingredientList,
    instructions,
    servingSize,
    category, 
    token
  ) =>
    dispatch(
      saveRecipe(
        user_id,
        title,
        imageUrl,
        ingredientList,
        instructions,
        servingSize,
        category,
        token
      )
    ),

  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
  updatedRecipe: (
    recipeid,
    user_id,
    title,
    imageUrl,
    ingredientList,
    instructions,
    servingSize,
    category,
    token
  ) =>
    dispatch(
      updatedRecipe(
        recipeid,
        user_id,
        title,
        imageUrl,
        ingredientList,
        instructions,
        servingSize,
        category,
        token
      )
    ),
    newMealSelection: (user, mealtime, day, recipename) => dispatch(newMealSelection(user, mealtime, day, recipename)),
    changeMealSelection: (mealplanid, user, mealtime, day,  recipename) => dispatch(changeMealSelection(mealplanid, user, mealtime, day, recipename)),
    deleteShoppingList: (item) => dispatch(deleteShoppingList(item)),
    deletePurchasedItem:(item) => dispatch(deletePurchasedItem(item)),
    addPurchasedItem:(item) => dispatch(addPurchasedItem(item)),
    postNewMealSelection: (mealselection, token) => dispatch(postNewMealSelection(mealselection, token))
});

class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  //NEEDS TO RETURN TOKENS
  componentDidUpdate(preprops) {
    if(this.props.token.token !== preprops.token.token) {
    this.props.fetchRecipes(this.props.token.token);
    this.props.fetchPantryItems(this.props.token.token);
    this.props.fetchMealPlan(this.props.token.token);
    this.props.fetchShoppingList(this.props.token.token);
    }
  }

  handleLogout = () => {
    this.props.addToken("");
    this.props.deleteUser();
  };


  //PASS TOKENS TO THE COMPONENTS
  render() {
    return (
      <div>
        {this.props.token.token !== undefined ? (
          <div>
            <Link to="/home">Home | </Link>
            <Link to="/login" onClick={this.handleLogout}>
              logout
            </Link>
            <Redirect to="/home" />
          </div>
        ) : (
          <Link to="/login">Home | </Link>
        )}
        <Switch>
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
          <Route
            path="/home"
            component={
              this.props.token.token !== undefined ? () => <Home /> : null
            }
          />
          <Route
            path="/weeklyplanner"
            component={() => (
              <WeeklyPlanner mealplan={this.props.mealplan.mealplan} user={this.props.user} 
              mealselection={this.props.mealselection.mealselection}
              postNewMealSelection={this.props.postNewMealSelection}
              token={this.props.token}  />
            )}
          />
          <Route
            path="/recipes"
            component={() => (
              <Recipes
                token={this.props.token.token}
                recipes={this.props.recipes.recipes}
                deleteRecipe={this.props.deleteRecipe}
                updateRecipe={this.props.updateRecipe}
                updatedRecipe={this.props.updatedRecipe}
              />
            )}
          />
          <Route
            path="/pantry"
            component={() => (
              <Pantry
                ingredient={this.props.ingredient.ingredient}
                user={this.props.user}
              />
            )}
          />
          <Route
            path="/shoppinglist"
            component={() => (
              <ShoppingList
                shoppingList={this.props.shoppinglist.shoppinglist}
                fetchShoppingList={this.props.fetchShoppingList}
                user={this.props.user}
                token={this.props.token.token}
                deleteShoppingList={this.props.deleteShoppingList}
                addPurchasedItem={this.props.addPurchasedItem}
                deletePurchasedItem={this.props.deletePurchasedItem}
                purchaseditems={this.props.purchaseditems.purchaseditems}
              />
            )}
          />
          <Route
            path="/createrecipe"
            component={() => (
              <CreateRecipe
                user={this.props.user}
                token={this.props.token}
                saveRecipe={this.props.saveRecipe}
                updatedRecipe={this.props.updatedRecipe}
              />
            )}
          />
          {/* testing functionality of day component */}
          <Route
            path="/day"
            component={() => (
              <Day newMealSelection={this.props.newMealSelection}
              changeMealSelection={this.props.changeMealSelection}
              mealselection={this.props.mealselection.mealselection}
               />
            )}
          />
          <Route path="/day" component={() => <Day />} />
          <Route path="/home" component={() => <Home />} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

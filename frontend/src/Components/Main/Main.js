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
  updateRecipe,
  newMealSelection
} from "../../Redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WeeklyPlanner from "../WeeklyPlanner/WeeklyPlanner";
import Recipes from "../Recipe/Recipes";
import ShoppingList from "../ShoppingList/ShoppingList";
import Pantry from "../Pantry/Pantry";
import CreateRecipe from "../Recipe/CreateRecipe";
import Day from "../Day/Day";
import DayTest from "../Meal/DayTest";

const mapStateToProps = (state) => {
  return {
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

const mapDispatchToProps = (dispatch) => ({
  addToken: () => {
    dispatch(addToken());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
  fetchRecipes: () => {
    dispatch(fetchRecipes());
  },

  fetchPantryItems: (user) => {
    dispatch(fetchPantryItems(user));
  },
  fetchMealPlan: (user) => {
    dispatch(fetchMealPlan(user));
  },
  fetchShoppingList: (user) => {
    dispatch(fetchShoppingList(user));
  },
  saveRecipe: (
    user_id,
    title,
    imageUrl,
    ingredientList,
    instructions,
    servingSize,
    category
  ) =>
    dispatch(
      saveRecipe(
        user_id,
        title,
        imageUrl,
        ingredientList,
        instructions,
        servingSize,
        category
      )
    ),

  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
  updateRecipe: (
    user_id,
    title,
    imageUrl,
    ingredientList,
    instructions,
    servingSize,
    category
  ) =>
    dispatch(
      updateRecipe(
        user_id,
        title,
        imageUrl,
        ingredientList,
        instructions,
        servingSize,
        category
      )
    ),
    newMealSelection: (day, mealtime, recipename) => dispatch(newMealSelection(day, mealtime, recipename))
});

class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchRecipes(this.props.user);
    this.props.fetchPantryItems(this.props.user);
    this.props.fetchMealPlan(this.props.user);
    this.props.fetchShoppingList(this.props.user);
  }

  handleLogout = () => {
    this.props.addToken("");
    this.props.deleteUser();
  };

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
              mealselection={this.props.mealselection.mealselection}  />
            )}
          />
          <Route
            path="/recipes"
            component={() => (
              <Recipes
                recipes={this.props.recipes.recipes}
                deleteRecipe={this.props.deleteRecipe}
                updateRecipe={this.props.updateRecipe}
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
                user={this.props.user}
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
              />
            )}
          />
          testing functionality of day component
          <Route
            path="/daytest"
            component={() => (
              <DayTest newMealSelection={this.props.newMealSelection} />
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

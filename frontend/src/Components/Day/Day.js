import { React, useState, useEffect } from "react";
import Navigator from "../navigation/Navigator";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";
import { Button,Col } from "reactstrap";
import "./day.css";

export default function Day(props) {
  const location = useLocation();
  //const { day } = location.state;

  const [newRecipes, setnewRecipes] = useState([{}]);
  const [posts, setPosts] = useState([]);
  let [num, setNum] = useState(0);

  const [isAdded, setIsAdded] = useState(false);
  const [list, setList] = useState([]);
  //const dispatch = useContext(CartDispatchContext);
  //const { image, name, price, id, stock } = data;

  const handleAddToCart = (e) => {
    // const product = { ...data, quantity: 1 };
    // addToCart(dispatch, product);
    setIsAdded(true);
    setList([...list, e.target.value]);
    list.map((item) => {
      alert(item+" "+num);
    });
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };
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
    fetch(baseUrl + "/Test/TestBreakfast")
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

      <h1 id="meal-day">
        Available {location.state.meal} item for {location.state.day} is:
      </h1>
      
      <div>
        
        <br/>
        {posts.map((post) => {
          return (
            <>
              <h1>{post}</h1>
              <div className="product-action">
                {IncDecCounter(num, setNum)}
                <br />
                <Button
                  //className={!isAdded ? "" : "added"}
                  color= "success"
                  type="button"
                  value={post}
                  onClick={handleAddToCart}
                  disabled={num===0}
                >
                  {!isAdded ? "ADD TO CART" : "✔ ADDED"}
                </Button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

function IncDecCounter(num, setNum) {
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className="col-2 col-md-1">
        <div class="input-group">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={decNum}
            >
              -
            </button>
          </div>
          <input
            type="text"
            class="form-control"
            value={num}
            onChange={handleChange}
          />
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import "./food.css";
import axios from "axios";
import loading from "../../assets/loading/loading.svg"

const Foodcontainer = () => {
  const [getdata, setdata] = useState([]);
  const [getgif, setgif] = useState();
  const [displaymessage, setmesaage] = useState("Find Your Recipe😋");
  const getRecipe = async () => {
    const status = document.querySelector(".message");
    const APP_ID = "cd3a4d4b";
    const APP_KEY = "117cda4403fb53bad0a1fc9e4770a9ba";
    let inptext = document.querySelector(".user_input").value;
    status.innerHTML = "Finding your recipe";
    setgif(loading)
    
    const url = `https://api.edamam.com/search?q=${inptext}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
    const response = await axios.get(url);
    if (response.data.hits.length > 1) {
      status.display = "flex";
      setgif()
      setmesaage("We Have Found Your Recipe 😊")
    } else {
      status.display = "flex";
      setgif()
      setmesaage("Recipe Not Found")    
}
    setdata(response.data.hits);
  };

  return (
    <section className="main_container">
      <div className="container">
        <div className="inputpart">
          <div className="search_panel">
            
            <input type="text" className="user_input" />
            <button  className="searchbtn" onClick={getRecipe}>
              Search
            </button>
            
          </div>
          <div className="status">
            <h1 className="message">{displaymessage}</h1>
            <img src={getgif} alt="" className="gif" />
          </div>
        </div>
        <div className="search_result">
          {getdata.map((meal) => {
            return (
              <div className="card">
                <div className="card_image">
                  <img src={meal.recipe.image} alt="unable to preview" />
                </div>

                <div className="card_content">
                  <h1 className="card_title">{meal.recipe.label}</h1>
                  <div className="mealcontent">
                    <h4 className="card_text">
                      Cuisine Type : {meal.recipe.cuisineType[0]}
                    </h4>
                    <h4 className="card_text">
                      Calories : {meal.recipe.calories.toFixed(2)}
                    </h4>
                    <h4 className="card_text">
                      Health Label : {meal.recipe.healthLabels[0]}
                    </h4>
                    <h4 className="card_text">
                      Meal Type : {meal.recipe.mealType[0]}
                    </h4>
                  </div>
                </div>
                <div className="s_btn">
                  <button className="btn card_btn">
                    <a
                      href={meal.recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Recipe
                    </a>{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Foodcontainer;

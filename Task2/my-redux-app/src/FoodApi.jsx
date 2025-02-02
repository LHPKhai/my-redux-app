import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FoodMain.css"; 

const FoodApi = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [filter, setFilter] = useState({ category: "All", country: "All" });

  // Fetch data from local JSON file or URL
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          "https://sudhanshu1919.github.io/FoodJson/Foodapi.json"
        );
        setFoods(response.data);
        setFilteredFoods(response.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="food-container">
      <h1 className="food-header">Food Items</h1>

      <div className="food-card-container">
        {filteredFoods.map((food) => (
          <div key={food.id} className="food-card">
            <div className="inner-card">
              <div>
                <img
                  src={food.image}
                  alt={food.foodname}
                  className="food-image"
                />
              </div>
              <div>
                <h3 className="food-name">{food.foodname}</h3>
                <p className="food-detail">
                  <strong>Category:</strong> {food.category}
                </p>
                <p className="food-detail">
                  <strong>Price:</strong> {food.prise}
                </p>
                <p className="food-detail">
                  <strong>Country:</strong> {food.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodApi;
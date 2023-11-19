import React, { useState, useEffect } from 'react';
import './style.css'

interface CostOfLivingPopupProps {
    townName: string;
  }

const CityCostOfLivingPopup: React.FC<CostOfLivingPopupProps> = ({ townName }) => {
  let [cityName,setCityName] = useState("{town name}");
  let [description,setDescription] = useState("{town description}");
  let [costOfLivingIndex,setCostOfLivingIndex] = useState("{placeholder}");
  let [medianRent,setMedianRent] = useState("{placeholder}");
  let [groceryCost,setGroceryCost] = useState("{placeholder}");

  useEffect(() => {
    const fetchData = async() => {
        // API calls here, syntax: const response = await fetch("api",{headers,body})
        // check the response and continue with the program
        
        
    };

    fetchData();

  }, []);

  const closePopup = () => {
    // Handle closing the pop-up
  };

  return (
    <div className="popup-container">
      <span className="close-btn" onClick={closePopup}>&times;</span>
      <div className="city-info">
        <h2>{cityName}</h2>
        <img className="city-image" src="{placeholder}" alt="City Image" />
        <p className="description">{description}</p>
        <div className="cost-details">
          <p>Cost of Living Index: {costOfLivingIndex}</p>
          <p>Median Rent: {medianRent}</p>
          <p>Grocery Cost: {groceryCost}</p>
          {/* Add more relevant cost of living information */}
        </div>
      </div>
    </div>
  );
};

export default CityCostOfLivingPopup;

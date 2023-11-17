import React, { useState, useEffect } from 'react';
import './style.css'

const CityCostOfLivingPopup = () => {
  const [cityData, setCityData] = useState({
    cityName: '{City Name}',
    description: '{Brief description of the city and its cost of living}',
    costOfLivingIndex: '{placeholder}',
    medianRent: '{placeholder}',
    groceryCost: '{placeholder}',
    // Add more relevant cost of living information
  });

  useEffect(() => {
    // Fetch city data from Figma API or any other data source
    // Update the state using setCityData with the fetched data
  }, []);

  const closePopup = () => {
    // Handle closing the pop-up
  };

  return (
    <div className="popup-container">
      <span className="close-btn" onClick={closePopup}>&times;</span>
      <div className="city-info">
        <img className="city-image" src="{placeholder}" alt="City Image" />
        <h2>{cityData.cityName}</h2>
        <p className="description">{cityData.description}</p>
        <div className="cost-details">
          <p>Cost of Living Index: {cityData.costOfLivingIndex}</p>
          <p>Median Rent: {cityData.medianRent}</p>
          <p>Grocery Cost: {cityData.groceryCost}</p>
          {/* Add more relevant cost of living information */}
        </div>
      </div>
    </div>
  );
};

export default CityCostOfLivingPopup;

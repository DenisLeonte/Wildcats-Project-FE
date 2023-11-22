import React, { useState, useEffect } from 'react';
import './style.css'
import { City } from '../../types/City';
import { CostOfLivingData } from '../../types/CostOfLivingData';

interface CostOfLivingPopupProps {
    town:City,
    costOfLivingData:CostOfLivingData
  }

const CityCostOfLivingPopup: React.FC<CostOfLivingPopupProps> = ({town,costOfLivingData}) => {
  let [cityName,setCityName] = useState("{town name}");

  useEffect(() => {
    const fetchData = async() => {

        
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
        <h2>{town.name}</h2>
        <img className="city-image" src="{placeholder}" alt="City Image" />
        <div className="cost-details">
        <ul>
            <li key={costOfLivingData.id}>
              {costOfLivingData.item} Price: {costOfLivingData.price} Added on: {costOfLivingData.date.toString()}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityCostOfLivingPopup;

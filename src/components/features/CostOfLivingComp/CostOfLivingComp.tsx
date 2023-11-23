import React from 'react'
import Popup from 'reactjs-popup'
import { useEffect, useState } from 'react';
import { City } from '../../types/City';
import { CostOfLivingData } from '../../types/CostOfLivingData';
import { Country } from '../../types/Country';



const CostOfLivingComp: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [costOfLivingData, setCostOfLivingData] = useState<CostOfLivingData[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const fetchCountries = async () => {
    const response = await fetch('/api/countries/');
    const data: Country[] = await response.json();
    return data;
  };

  const fetchCities = async () => {
    const response = await fetch('/api/cities/');
    const data = await response.json();
    return data;
  };

  const fetchAllCostOfLivingData = async () => {
    const response = await fetch('/api/cost-of-living/');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    async function fetchData() {
      const countries:Country[] = await fetchCountries();
      const citiesJson = await fetchCities();
      const costOfLivingJson = await fetchAllCostOfLivingData();

      // Process cities to link them to their countries
      const cities:City[] = citiesJson.map((cityJson: { country: number; }) => {
        const country = countries.find(country => country.id === cityJson.country);
        return { ...cityJson, country: country };
      });

      // Process cost of living data to link it to the respective cities
      const costOfLivingData: CostOfLivingData[] = costOfLivingJson.map((colJson: { city: number; }) => {
        const city = cities.find((city: { id: number; }) => city.id === colJson.city);
        return { ...colJson, city: city };
      });

      setCountries(countries);
      setCities(cities);
      setCostOfLivingData(costOfLivingData);
      setIsDataFetched(true);
    }
    fetchData();
  }, []);

  if (!isDataFetched) {
    return <div className="App">Loading...</div>;
  } else {

    return (
      <div>
        <ul>
          {countries.map((country) => (
            <li key={country.id}>
              {country.name}
              <ul>
                
                {cities.filter(city => city.country.id === country.id).map((city) => (
                  <li key={city.id}>
                    <Popup trigger={<button>{city.name}</button>} modal>
                      <div>
                        <ul>
                          {costOfLivingData.filter(col => col.city.id === city.id ).map((costOfLivingData) => (
                            <li key={costOfLivingData.id}>
                              {costOfLivingData.item} Price: {costOfLivingData.price} Added on: {costOfLivingData.date.toString()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Popup>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CostOfLivingComp;
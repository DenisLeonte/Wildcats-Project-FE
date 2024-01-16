import { Country } from "../types/Country";
import { City } from "../types/City";
import { CostOfLivingData } from "../types/CostOfLivingData";
const BASE_COUNTRIES_URL = '/api/countries/';
const BASE_CITIES_URL = '/api/cities/';
const COST_OF_LIVING_URL = '/api/cost-of-living/';

interface ApiCountry {
    id: number;
    name: string;
    code: string;
  }
  
  interface ApiCity {
    id: number;
    name: string;
    country: number;
    latitude: number;
    longitude: number;
    main_iata_code: string;
  }
  
  interface ApiCostOfLiving {
    id: number;
    city: number;
    item: string;
    price: number;
    date: string; // Assuming the date comes as a string from the API
  }
  type FormattedData = {
    countries: Country[];
    cities: City[];
    costOfLiving: CostOfLivingData[];
  };

export const fetchCountries = async (id: number = -1) => {
    const url = id === -1 ? BASE_COUNTRIES_URL : BASE_COUNTRIES_URL + id;
    const response = await fetch(url);
    return await response.json();
}

export const fetchCities = async (id: number = -1) => {
    const url = id === -1 ? BASE_CITIES_URL : BASE_CITIES_URL + id;
    const response = await fetch(url);
    return await response.json();
}

export const fetchCostOfLiving = async (id: number = -1) => {
    const url = id === -1 ? COST_OF_LIVING_URL : COST_OF_LIVING_URL + id;
    const response = await fetch(url);
    return await response.json();
}

export const fetchCitiesOfCountry = async (id: number) => {
    const url = BASE_CITIES_URL + 'country/' + id;
    const response = await fetch(url);
    return await response.json();
}

export const fetchCostOfLivingOfCity = async (id: number) => {
    const url = COST_OF_LIVING_URL + 'city/' + id;
    const response = await fetch(url);
    return await response.json();
}

export const getFormattedData = async () : Promise<FormattedData> =>  {
    try {
      const countries = await fetchCountries(); // Expected to be an array of Country
      const cities = await fetchCities(); // Expected to be an array of { id, name, country_id, latitude, longitude }
      const costOfLiving = await fetchCostOfLiving(); // Expected to be an array of { id, cityId, item, price, date }
  
      // Create a map of countries for quick lookup
      const countryMap = new Map(countries.map((country : ApiCountry) => [country.id, country]));
  
      // Format cities with their associated country
      const formattedCities = cities.map((city : ApiCity) => ({
        ...city,
        country: countryMap.get(city.country) // Assuming city has country_id property
      }));
  
      // Create a map of formatted cities for quick lookup
      const cityMap = new Map(formattedCities.map((city: ApiCity) => [city.id, city]));
  
      // Format the cost of living data with the associated city (including the country)
      const formattedCostOfLiving = costOfLiving.map((col : ApiCostOfLiving) => ({
        ...col,
        city: cityMap.get(col.city) // Assuming col has cityId property
      }));
  
      return {
        countries,          // Array of Country
        cities: formattedCities, // Array of City with Country embedded
        costOfLiving: formattedCostOfLiving // Array of CostOfLivingData with City (and Country) embedded
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it where the function is called
    }
  };



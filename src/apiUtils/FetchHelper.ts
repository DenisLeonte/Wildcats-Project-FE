import { ApiCountry, Country } from "../types/Country";
import { ApiCity, City } from "../types/City";
import { ApiCostOfLiving, CostOfLivingData } from "../types/CostOfLivingData";
import { SearchFlightsQuery } from "../types/SearchFlightsQuery";
import { FlightResonseStatus } from "../types/FlightResponse";
const BASE_COUNTRIES_URL = '/api/countries/';
const BASE_CITIES_URL = '/api/cities/';
const COST_OF_LIVING_URL = '/api/cost-of-living/';
const FLIGHTS_URL = '/api/search/flights/';
const HOTELS_URL = '/api/search/hotels/';
  
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
      const countries = await fetchCountries(); 
      const cities = await fetchCities(); 
      const costOfLiving = await fetchCostOfLiving(); 
  
      const countryMap = new Map(countries.map((country : ApiCountry) => [country.id, country]));
  
      const formattedCities = cities.map((city : ApiCity) => ({
        ...city,
        country: countryMap.get(city.country) 
      }));
  
      const cityMap = new Map(formattedCities.map((city: ApiCity) => [city.id, city]));
  
      const formattedCostOfLiving = costOfLiving.map((col : ApiCostOfLiving) => ({
        ...col,
        city: cityMap.get(col.city) 
      }));
  
      return {
        countries,         
        cities: formattedCities, 
        costOfLiving: formattedCostOfLiving 
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it where the function is called
    }
  };


export const getFlights = async (query: SearchFlightsQuery) => {
  const BODY = {
    to_iata: query.to.main_iata_code,
    from_iata: query.from.main_iata_code,
    startDate: query.startDate.toISOString().split('T')[0],
    endDate: query.endDate.toISOString().split('T')[0],
    adults: query.adults,
  }
  const response = await fetch(FLIGHTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    body: JSON.stringify(BODY),
  });
  return await response.json();
};

export const getCsrfToken = () => {
    const token = document.cookie.split(';').find(c => c.trim().startsWith('csrftoken='));
    if (token) {
        return token.split('=')[1];
    }
    return '';
}

export const getHotels = async (city : City, startDate: Date, endDate: Date, adults : number) => {
  const response = await fetch(HOTELS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    body: JSON.stringify({
      'city_iata' : city.main_iata_code,
      'arrival_date': startDate.toISOString().split('T')[0],
      'departure_date': endDate.toISOString().split('T')[0],
      'adults': adults,
    })
  });
  const jsonresp = await response.json();
  return jsonresp.data.hotels;
}
export const getHotelDetails = async (hotel_id : number, arrival_date : Date, departure_date: Date, adults: number) => {
  const response = await fetch(HOTELS_URL + 'details/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    body: JSON.stringify( {
      'hotel_id': hotel_id,
      'arrival_date': arrival_date.toISOString().split('T')[0],
      'departure_date': departure_date.toISOString().split('T')[0],
      'adults': adults,
    }),
  });
  const jsonresp = await response.json();
  console.log(jsonresp);
  return jsonresp.data;
}

export const getFlightDetails = async (search_id : string, url: number) => {
  const response = await fetch(FLIGHTS_URL + 'details/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    body: JSON.stringify({
      'search_id': search_id,
      'url': url,
    }),
  });
  const jsonresp = await response.json();
  console.log(jsonresp);
  return jsonresp;
}
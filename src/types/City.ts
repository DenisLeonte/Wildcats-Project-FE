import { Country, EMPTY_COUNTRY } from "./Country";
import { CostOfLivingData } from "./CostOfLivingData";

export interface City {
    id: number;
    name: string;
    country: Country;
    latitude: number;
    longitude: number;
    main_iata_code: string;
}


export interface ApiCity {
    id: number;
    name: string;
    country: number;
    latitude: number;
    longitude: number;
    main_iata_code: string;
}


export const EMPTY_CITY: City = {
    id: -1,
    name: "",
    country: EMPTY_COUNTRY,
    latitude: 0,
    longitude: 0,
    main_iata_code: ""
}
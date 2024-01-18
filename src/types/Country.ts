import { City } from "./City";

export interface Country {
    id: number;
    name: string;
    code: string; 
    timezone: string;
  }

export interface ApiCountry {
    id: number;
    name: string;
    code: string;
  }

export const EMPTY_COUNTRY: Country = {
    id: -1,
    name: "",
    code: "",
    timezone: ""
}

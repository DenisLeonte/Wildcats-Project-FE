import { Country } from "./Country";
import { CostOfLivingData } from "./CostOfLivingData";

export interface City {
    id: number;
    name: string;
    country: Country;
    latitude: number;
    longitude: number;
}


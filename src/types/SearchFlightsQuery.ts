import { City, EMPTY_CITY } from "./City";

export interface SearchFlightsQuery {
    to: City;
    from: City;
    startDate: Date;
    endDate: Date;
    adults: number;
    maxPrice?: number;
    maxStops?: number;
    directOnly?: boolean;
}

export const EMPTY_SEARCH_FLIGHTS_QUERY: SearchFlightsQuery = {
    to: EMPTY_CITY,
    from: EMPTY_CITY,
    startDate: new Date(),
    endDate: new Date(),
    maxPrice: 0,
    maxStops: 0,
    directOnly: false,
    adults: 0
}
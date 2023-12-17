import { City } from "../types/City";
import { SearchQuery } from "../types/SearchQuery"; 
const SEARCH_URL = "/api/search/flights"
const searchQueryRegex = /to:(?<to>\d+),\s*from:(?<from>\d+),\s*startDate:(?<startDate>\d{4}-\d{1,2}-\d{1,2})(?:,\s*endDate:(?<endDate>\d{4}-\d{1,2}-\d{1,2}))?,\s*(?:maxPrice:(?<maxPrice>\d+))?,\s*directOnly:(?<directOnly>true|false),\s*(?:maxStops:(?<maxStops>\d+))?/;

export const formatSearchQuery = (queryString: string): SearchQuery | null => {
    const match = queryString.match(searchQueryRegex);

    if (match) {
        const { to, from, startDate, endDate, maxPrice, directOnly, maxStops } = match.groups as { [key: string]: string };
        const result: SearchQuery = {
          to_id: parseInt(to),
          from_id: parseInt(from),
          startDate: formatDateToYYYYMMDD(new Date(startDate)),
          endDate: endDate ? formatDateToYYYYMMDD(new Date(endDate)) : null,
          maxPrice: maxPrice ? parseInt(maxPrice) : 999999999,
          directOnly: directOnly === "true",
          maxStops: maxStops ? parseInt(maxStops) : 999
        };
        return result;
      }

    return null;
};

function formatDateToYYYYMMDD(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  

export const searchFlights = async (query : SearchQuery) => {
    const HEADERS = {
        "Content-Type": "application/json",
    };

    const body = JSON.stringify(query);
    const options = {
        method: "POST",
        headers: HEADERS,
        body,
    };
    const response = null;
    console.log(options);

    await fetch(SEARCH_URL, options)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error));

    return response;
}

export interface FlightResponse {
    url: number;
    origin_airport: string;
    destination_airport: string;
    local_start_time: string;
    local_end_time: string
    airline: string;
    price: number;
    transfers: number;
    stops_airports: string[];
    no_stops: number;
    departure_date: string;
    arrival_date: string;
    currency: string;
}

export const EMPTY_FLIGHT_RESPONSE: FlightResponse = {
    url: -1,
    origin_airport: "",
    destination_airport: "",
    local_start_time: '',
    local_end_time: '',
    airline: "",
    price: -1,
    transfers: -1,
    stops_airports: [],
    no_stops: 0,
    departure_date: "",
    arrival_date: "",
    currency: "",
}

export interface FlightResponseError {
    error : string;
    status : number;
    success : boolean;
}

export const EMPTY_FLIGHT_RESPONSE_ERROR: FlightResponseError = {
    error: "",
    status: 0,
    success: false
}

export enum FlightResonseStatus {
    SUCCESS = 1,
    ERROR = 2,
    NOT_SET = 3,
}
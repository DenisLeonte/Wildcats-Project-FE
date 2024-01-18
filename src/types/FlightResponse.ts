export interface FlightResponse {
    flight_number: string;
    link: string;
    origin_airport: string;
    destination_airport: string;
    departure_at: string;
    airline: string;
    destination: string;
    origin: string;
    price: number;
    return_transfers: number;
    duration: number;
    duration_to: number;
    duration_back: number;
    transfers: number;
}

export const EMPTY_FLIGHT_RESPONSE: FlightResponse = {
    flight_number: "",
    link: "",
    origin_airport: "",
    destination_airport: "",
    departure_at: "",
    airline: "",
    destination: "",
    origin: "",
    price: 0,
    return_transfers: 0,
    duration: 0,
    duration_to: 0,
    duration_back: 0,
    transfers: 0
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
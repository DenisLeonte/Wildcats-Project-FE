import { City, EMPTY_CITY } from "./City";

export interface CostOfLivingData {
  id: number;
  city: City;
  item: string;
  price: number;
  date: Date;
}


export interface ApiCostOfLiving {
  id: number;
  city: number;
  item: string;
  price: number;
  date: string;
}

export const EmptyCostOfLivingData: CostOfLivingData = {
  id: -1,
  city: EMPTY_CITY,
  item: "",
  price: 0,
  date: new Date()
}

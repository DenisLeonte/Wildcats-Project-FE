import { createContext, useEffect, useState } from "react";
import { fetchCities, fetchCountries, fetchCostOfLiving, getFormattedData } from "../../apiUtils/FetchHelper";
import { Country } from "../../types/Country";
import { City } from "../../types/City";
import { CostOfLivingData } from "../../types/CostOfLivingData";

interface ApiContextState {
    Countries: Country[];
    Cities: City[];
    CostOfLivingData: CostOfLivingData[];
    // You can also include functions to update these states if needed
  }

const InitialApiContextState : ApiContextState = {
    Countries : [],
    Cities: [],
    CostOfLivingData : [],
}
export const ApiContext = createContext(InitialApiContextState);

export const ApiContextProvider = ({children}: {children: React.ReactNode}) => {
    const [countriesState, setCountriesState] = useState(InitialApiContextState.Countries);
    const [citiesState, setCitiesState] = useState(InitialApiContextState.Cities);
    const [costOfLivingDataState, setCostOfLivingDataState] = useState(InitialApiContextState.CostOfLivingData);

    useEffect(() => {
        getFormattedData().then((data) => {
            setCountriesState(data.countries);
            setCitiesState(data.cities);
            setCostOfLivingDataState(data.costOfLiving);
            console.log(data);
        });

    }, []);

    const contextValue = {
        Countries: countriesState,
        Cities: citiesState,
        CostOfLivingData: costOfLivingDataState,
    };

    return (
        <ApiContext.Provider value={contextValue}>
            {children}
        </ApiContext.Provider>
    );
}

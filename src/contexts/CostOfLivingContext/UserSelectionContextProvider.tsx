import { createContext, useContext, useEffect, useState } from "react";
import { Country, EMPTY_COUNTRY } from "../../types/Country";
import { City, EMPTY_CITY } from "../../types/City";

interface UserSelectionContextProps {
    country: Country;
    updateCountry: (new_country: Country) => void;
    travelPageOriginCity: City;
    setTravelPageOriginCity: (new_city: City) => void;
    travelPageDestinationCity: City;
    setTravelPageDestinationCity: (new_city: City) => void;
    hotelSearchCity: City;
    setHotelSearchCity: (new_city: City) => void;
}

const initialContext: UserSelectionContextProps = {
    country: EMPTY_COUNTRY,
    updateCountry: () => { },
    travelPageOriginCity: EMPTY_CITY,
    setTravelPageOriginCity: () => { },
    travelPageDestinationCity: EMPTY_CITY,
    setTravelPageDestinationCity: () => { },
    hotelSearchCity: EMPTY_CITY,
    setHotelSearchCity: () => { },
};

const UserSelectionContext = createContext<UserSelectionContextProps>(initialContext);

export const UserSelectionContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [travelPageOriginCity, setTravelPageOriginCity] = useState<City>(initialContext.travelPageOriginCity);
    const [travelPageDestinationCity, setTravelPageDestinationCity] = useState<City>(initialContext.travelPageDestinationCity);
    const [hotelSearchCity, setHotelSearchCity] = useState<City>(initialContext.hotelSearchCity);
    const [country, setCountry] = useState(() => {
        try {
            const Country = JSON.parse(localStorage.getItem('country') || "") as Country;
            return Country;
        }
        catch (error) {
            return EMPTY_COUNTRY;
        }
    });

    const updateCountry = (new_country: Country) => {
        setCountry(new_country);
        localStorage.setItem('country', JSON.stringify(new_country));
    };

    useEffect(() => {
        updateCountry(country);
    }, []);

    const contextValue = {
        country,
        updateCountry,
        travelPageOriginCity,
        setTravelPageOriginCity,
        travelPageDestinationCity,
        setTravelPageDestinationCity,
        hotelSearchCity,
        setHotelSearchCity,
    };

    return (
        <div>
            <UserSelectionContext.Provider value={contextValue}>
                {children}
            </UserSelectionContext.Provider>
        </div>
    );
};

export const useUserSelectionContext = () => {
    return useContext(UserSelectionContext);
};
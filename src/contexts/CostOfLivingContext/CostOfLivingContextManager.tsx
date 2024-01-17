import { createContext, useContext, useEffect, useState } from "react";
import { Country } from "../../types/Country";

interface CostOfLivingContextProps{
    country: Country;
    updateCountry: (new_country: Country) => void;
}

const initialContext: CostOfLivingContextProps = {
    country: {id: -1, name: "", code: ""},
    updateCountry: () => { },
};

const CostOfLivingContext = createContext<CostOfLivingContextProps>(initialContext);

export const CostOfLivingProvider = ({children}: {children: React.ReactNode}) =>{
    const [country, setCountry] = useState(() =>{
        try{
            const Country = JSON.parse(localStorage.getItem('country') || "") as Country;
            return Country;
        }
        catch (error){
            return {id: -1, name: "", code: ""} as Country;
        }
    });

    const updateCountry = (new_country:Country) =>{
        setCountry(new_country);
        localStorage.setItem('country', JSON.stringify(new_country));
    };

    useEffect(() => {
        updateCountry(country);
    }, []);

    return(
        <div>
            <CostOfLivingContext.Provider value={{ country, updateCountry }}>
                {children}
            </CostOfLivingContext.Provider>
        </div>
    );
};

export const useCostOfLivingContext = () => {
    return useContext(CostOfLivingContext);
};
import { createContext, useContext, useEffect, useState } from "react";

interface CostOfLivingContextProps{
    country: string;
    updateCountry: (new_country: string) => void;
}

const initialContext: CostOfLivingContextProps = {
    country: "",
    updateCountry: () => { },
};

const CostOfLivingContext = createContext<CostOfLivingContextProps>(initialContext);

export const CostOfLivingProvider = ({children}: {children: React.ReactNode}) =>{
    const [country, setCountry] = useState(() =>{
        return localStorage.getItem('country') || "";
    });

    const updateCountry = (new_country:string) =>{
        setCountry(new_country);
        localStorage.setItem('country', new_country);
    };

    useEffect(() => {
        let newCountry = localStorage.getItem('country') || "";
        updateCountry(newCountry);
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
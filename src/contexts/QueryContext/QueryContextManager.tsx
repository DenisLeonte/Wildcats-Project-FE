import { createContext, useContext, useState } from "react";

interface QueryContextProps {
    origin: string;
    destination: string;
    startDate: Date;
    endDate: Date;
    passengerCount: number;
}

const initialContext: QueryContextProps = {
    origin: "",
    destination: "",
    startDate: new Date(),
    endDate: new Date(),
    passengerCount: 1
};

const QueryContext = createContext<QueryContextProps>(initialContext);

export const QueryProvider = ({children}: {children: React.ReactNode}) =>{
    const [query, setQuery] = useState(initialContext);
    const updateQuery = (new_query:QueryContextProps) =>{
        setQuery(new_query);
    };

    return (
        <div>
            <QueryContext.Provider value={{ ...query, ...updateQuery }}>
                {children}
            </QueryContext.Provider>
        </div>
    )
}

export const useQueryContext = () => {
    return useContext(QueryContext);
}
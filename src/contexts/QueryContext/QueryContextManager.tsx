import { createContext, useContext, useEffect, useState } from "react";
import { EMPTY_SEARCH_FLIGHTS_QUERY, SearchFlightsQuery } from "../../types/SearchFlightsQuery";

interface QueryContextProps {
    query:SearchFlightsQuery;
    updateQuery: (new_query: SearchFlightsQuery) => void;
}

const initialContext: QueryContextProps = {
    query: EMPTY_SEARCH_FLIGHTS_QUERY,
    updateQuery: () => { },
};

const QueryContext = createContext<QueryContextProps>(initialContext);

export const QueryProvider = ({children}: {children: React.ReactNode}) =>{
    const [query, setQuery] = useState(() =>{
        try{
            const query = JSON.parse(localStorage.getItem('query') || "") as SearchFlightsQuery;
            return query;
        }
        catch(error){
            return EMPTY_SEARCH_FLIGHTS_QUERY;
        }
    });
    const updateQuery = (new_query:SearchFlightsQuery) =>{
        setQuery(new_query);
        localStorage.setItem('query', JSON.stringify(new_query));
    };

    useEffect(() => {
        let newQuery = query;
        updateQuery(newQuery);
    }, []);

    return (
        <div>
            <QueryContext.Provider value={{ query, updateQuery }}>
                {children}
            </QueryContext.Provider>
        </div>
    )
}

export const useQueryContext = () => {
    return useContext(QueryContext);
}
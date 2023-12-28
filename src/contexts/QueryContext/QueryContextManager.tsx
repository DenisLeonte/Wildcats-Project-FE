import { createContext, useContext, useEffect, useState } from "react";

interface QueryContextProps {
    query:any;
    updateQuery: (new_query: any) => void;
}

const initialContext: QueryContextProps = {
    query: {},
    updateQuery: () => { },
};

const QueryContext = createContext<QueryContextProps>(initialContext);

export const QueryProvider = ({children}: {children: React.ReactNode}) =>{
    const [query, setQuery] = useState(() =>{
        return JSON.parse(localStorage.getItem('query') || "{}");
    });
    const updateQuery = (new_query:QueryContextProps) =>{
        setQuery(new_query);
        localStorage.setItem('query', JSON.stringify(new_query));
    };

    useEffect(() => {
        let newQuery = JSON.parse(localStorage.getItem('query') || "{}");
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
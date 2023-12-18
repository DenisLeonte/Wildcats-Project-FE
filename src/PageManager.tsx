import { createContext, useContext, useState } from "react";
interface GlobalContextProps {
  page: string;
  updatePage: (new_page: string) => void;
}

// Provide initial context value
const initialContext: GlobalContextProps = {
  page: "home",
  updatePage: () => {},
};

const GlobalContext = createContext<GlobalContextProps>(initialContext);

export const GlobalProvider = ({children}: {children: React.ReactNode}) =>{
  const [page, setPage] = useState("travel");
  const updatePage = (new_page:string) =>{
    setPage(new_page);
  };

  return (
    <div>
      <GlobalContext.Provider value={{ page, updatePage }}>
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}
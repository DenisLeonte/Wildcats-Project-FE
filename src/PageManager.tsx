import { createContext } from "react";

interface PageManagerContextProps {
    page: string;
    setPage: React.Dispatch<React.SetStateAction<string>>;
  }
  
  // Provide initial context value
  const initialContext: PageManagerContextProps = {
    page: "",
    setPage: () => {},
  };
  
  export const PageManager = createContext<PageManagerContextProps>(initialContext);
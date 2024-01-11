import { createContext, useContext, useEffect, useState } from "react";

interface PageContextProps {
  page: string;
  updatePage: (new_page: string) => void;
}
// Provide initial context value
const initialContext: PageContextProps = {
  page: "home",
  updatePage: () => { },
};
const PageContext = createContext<PageContextProps>(initialContext);

export const PageProvider = ({ children }: { children: React.ReactNode; }) => {
  const [page, setPage] = useState(() => {
    return localStorage.getItem('page') || "home";
  });
  const updatePage = (new_page: string) => {
    setPage(new_page);
    localStorage.setItem('page', new_page);
  };

  useEffect(() => {
    updatePage(localStorage.getItem('page') || "home");
  }, []);

  return (
    <div>
      <PageContext.Provider value={{ page, updatePage }}>
        {children}
      </PageContext.Provider>
    </div>
  );
};

export const usePageContext = () => {
  return useContext(PageContext);
};

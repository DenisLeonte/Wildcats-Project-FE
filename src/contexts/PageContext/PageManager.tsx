import { createContext, useContext, useEffect, useState } from "react";

//provide default page
const def_page = "home"

interface PageContextProps {
  page: string;
  updatePage: (new_page: string) => void;
}
// Provide initial context value
const initialContext: PageContextProps = {
  page: def_page,
  updatePage: () => { },
};
const PageContext = createContext<PageContextProps>(initialContext);

export const PageProvider = ({ children }: { children: React.ReactNode; }) => {
  const [page, setPage] = useState(() => {
    return localStorage.getItem('page') || def_page;
  });
  const updatePage = (new_page: string) => {
    setPage(new_page);
    localStorage.setItem('page', new_page);
  };

  useEffect(() => {
    updatePage(localStorage.getItem('page') || def_page);
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

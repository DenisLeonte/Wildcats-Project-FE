import HomePage from "./components/features/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createContext, useEffect, useState} from 'react';
import { PageManager } from "./PageManager";
import HomeComponentWrapper from "./components/features/HomePage/HomePageWrapper";
import TravelPageWrapper from "./components/features/Travel/TravelPageWrapper";

function App(){
  const [page, setPage] = useState("home");


  return(
    <PageManager.Provider value={{page,setPage}}>
      <HomeComponentWrapper/>
      <TravelPageWrapper/>
    </PageManager.Provider>
  );
}

export default App;
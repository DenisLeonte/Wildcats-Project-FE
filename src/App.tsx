import Search from "antd/es/input/Search";
import HomeComponentWrapper from "./components/features/HomePage/HomePageWrapper";
import TravelPageWrapper from "./components/features/Travel/TravelPageWrapper";
import { GlobalProvider } from "./PageManager";
import SearchResultWrapper from "./components/features/SearchResult/SearchResult";

function App(){
  return(
    <GlobalProvider>
      <HomeComponentWrapper/>
      <TravelPageWrapper/>
      <SearchResultWrapper/>
    </GlobalProvider>
  )
}

export default App;
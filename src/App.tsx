import Search from "antd/es/input/Search";
import HomeComponentWrapper from "./components/features/HomePage/HomePageWrapper";
import TravelPageWrapper from "./components/features/Travel/TravelPageWrapper";
import { PageProvider } from "./contexts/PageContext/PageManager";
import SearchResultPageWrapper from "./components/features/SearchResult/SearchResultPageWrapper";
import { QueryProvider } from "./contexts/QueryContext/QueryContextManager";

function App(){
  return(
    <PageProvider>
      <QueryProvider>
        <HomeComponentWrapper/>
        <TravelPageWrapper/>
        <SearchResultPageWrapper/>
      </QueryProvider>
    </PageProvider>
  )
}

export default App;
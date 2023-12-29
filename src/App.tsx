import HomeComponentWrapper from "./components/features/HomePage/HomePageWrapper";
import TravelPageWrapper from "./components/features/Travel/TravelPageWrapper";
import { PageProvider } from "./contexts/PageContext/PageManager";
import SearchResultPageWrapper from "./components/features/SearchResult/SearchResultPageWrapper";
import { QueryProvider } from "./contexts/QueryContext/QueryContextManager";
import { CostOfLivingProvider } from "./contexts/CostOfLivingContext/CostOfLivingContextManager";
import CostOfLivingWrapper from "./components/features/CostOfLiving/CostOfLivingWrapper";

function App(){
  return(
    <PageProvider>
      <QueryProvider>
        <CostOfLivingProvider>
          <HomeComponentWrapper/>
          <TravelPageWrapper/>
          <SearchResultPageWrapper/>
          <CostOfLivingWrapper/>
        </CostOfLivingProvider>
      </QueryProvider>
    </PageProvider>
  )
}

export default App;
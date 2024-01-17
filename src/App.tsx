import { PageProvider } from "./contexts/PageContext/PageManager";
import { QueryProvider } from "./contexts/QueryContext/QueryContextManager";
import { CostOfLivingProvider } from "./contexts/CostOfLivingContext/CostOfLivingContextManager";
import CostOfLivingWrapper from "./components/features/CostOfLiving/CostOfLivingWrapper";
import HotelSearchWrapper from "./components/features/HotelSearch/HotelSearchWrapper";
import HomeComponentWrapper from "./components/features/HomePage/HomePageWrapper";
import TravelPageWrapper from "./components/features/Travel/TravelPageWrapper";
import SearchResultPageWrapper from "./components/features/SearchResult/SearchResultPageWrapper";

function App(){
  return(
    <PageProvider>
      <QueryProvider>
        <CostOfLivingProvider>
          <HomeComponentWrapper/>
          <TravelPageWrapper/>
          <SearchResultPageWrapper/>
          <CostOfLivingWrapper/>
          <HotelSearchWrapper/>
        </CostOfLivingProvider>
      </QueryProvider>
    </PageProvider>
  )
}

export default App;
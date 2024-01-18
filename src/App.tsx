import HomeComponentWrapper from "./components/features/HomePage/HomePageWrapper";
import TravelPageWrapper from "./components/features/Travel/TravelPageWrapper";
import SearchResultPageWrapper from "./components/features/SearchResult/SearchResultPageWrapper";
import CostOfLivingWrapper from "./components/features/CostOfLiving/CostOfLivingWrapper";
import { PageProvider } from "./contexts/PageContext/PageManager";
import { QueryProvider } from "./contexts/QueryContext/QueryContextManager";
import { UserSelectionContextProvider } from "./contexts/CostOfLivingContext/UserSelectionContextProvider";
import { ApiContextProvider } from "./contexts/ApiContextProvider/ApiContextProvider";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <ApiContextProvider>
        <PageProvider>
          <QueryProvider>
            <UserSelectionContextProvider>
              <HomeComponentWrapper />
              <TravelPageWrapper />
              <SearchResultPageWrapper />
              <CostOfLivingWrapper />
            </UserSelectionContextProvider>
          </QueryProvider>
        </PageProvider>
      </ApiContextProvider>
    </AuthProvider>
  );
}

export default App;

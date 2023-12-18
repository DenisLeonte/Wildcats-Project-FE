import HomeComponentWrapper from "./components/features/HomePage/HomePageWrapper";
import TravelPageWrapper from "./components/features/Travel/TravelPageWrapper";
import { GlobalProvider } from "./PageManager";

function App(){
  return(
    <GlobalProvider>
      <HomeComponentWrapper/>
      <TravelPageWrapper/>
    </GlobalProvider>
  )
}

export default App;
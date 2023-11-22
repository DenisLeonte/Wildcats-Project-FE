import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import WebApp from './features/WebApp/WebApp';
import './styles/App.css';
import Home from './features/Home/Home';


function App() {
  return(
  <div>
      <Router>
        <Switch>
          <Route path={"/webapp"} component={WebApp}/>
          <Route path={"/landing"} component={Home}/>
        </Switch>
      </Router>
  </div>
  )
}
export default App;

import './styles/App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./features/Login/Login";
import Register from "./features/Register/Register";
import WebApp from "./features/WebApp/WebApp";
import Home from './features/Home/Home'
import NotFound from "./features/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {    
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/webapp" component={WebApp}/>
            <Route path="/notfound" component={NotFound}/>
            <Route path="/">
                <Redirect to="/notfound"></Redirect>
            </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

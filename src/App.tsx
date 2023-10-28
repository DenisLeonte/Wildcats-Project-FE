import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import WebApp from "./WebApp/WebApp";
import Home from './Home/Home'
import Navbar from "./Common/navbar/navbar";
import NotFound from "./NotFound/NotFound";

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

import React from 'react'
import {Link} from "react-router-dom";
import RedirectButton from "../RedirectButton/RedirectButton";

function Navbar(){
    return(
      <div>
          <RedirectButton text='Home' path='/home'/>
          <RedirectButton text='Login' path='/login'/>
          <RedirectButton text='Register' path='/register'/>
          <RedirectButton text='WebApp' path='/webapp'/>
      </div>
    );
}

export default Navbar;
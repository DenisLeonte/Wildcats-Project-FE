import React from 'react'
import {Link} from "react-router-dom";

function RedirectButton(props: { text: any; path: any; }){

    const {text, path} = props;
    return (
        <Link to={path}><button>{text}</button></Link>
    );
}

export default RedirectButton;
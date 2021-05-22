import React from 'react';
import {
    BrowserRouter , Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Home(){
    return (
        <div>
        
             <Link to="/">Home</Link>
            
            
              <Link to="/SignIn">Signin</Link>
            
              <Link to="/SignUp">Signup</Link>
            
              <Link to="/Sellers">Sellers</Link>
           
              <Link to="/Buyers">Buyers</Link>
            
              <Link to="/Help">Help</Link>
            
       

      </div>
    )
}

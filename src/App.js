
import './App.css';
import React from 'react';
import Buyers from './components/Buyers/Buyers';
import Sellers from './components/Sellers/Sellers';
import Help from './components/Help/Help';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import {
  BrowserRouter , Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function App(){
  return(
    
       
          <BrowserRouter>
        <Switch>
         
          <Route exact path="/SignIn"> <SignIn />  </Route>
          <Route exact path="/SignUp"> <SignUp />  </Route>
          <Route exact path="/Sellers"> <Sellers />  </Route> 
          <Route exact path="/Buyers"> <Buyers />  </Route> 
          <Route exact path="/Help"> <Help />  </Route> 
          <Route exact path="/"> <Home /> </Route>
         
        </Switch>
        </BrowserRouter>  
      
  )
}

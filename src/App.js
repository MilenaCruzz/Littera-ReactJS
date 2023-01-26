import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NewReading from "./components/pages/NewReading";
import Readings from "./components/pages/Readings";
import Reading from './components/pages/Reading'



function App() {
  return (
    <Router>
          
      <Navbar/>
      <Switch>
     
        <Route  exact path="/">
          <Home/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/readings" >
        <Readings/>
        </Route>

        <Route exact path="/newreading" >
        <NewReading/>
        </Route>   

         <Route exact path="/reading/:id" >
        <Reading/>
        </Route>   

       
      </Switch>
  
  
    <Footer/>
    </Router>
    
    

    
  );
}

export default App;

import React from 'react'
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/pages/Home/Home'
import Features from './components/pages/Features/Features'
import "./assets/css/mystyle.css"

function App() {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home/></Route>   
        <Route exact path="/features"><Features/></Route>
        {/* <Route exact path="/productdetail/:id/:color/:"><Productdetail/></Route> */}
      </Switch>
    </BrowserRouter>
  )

}

export default App
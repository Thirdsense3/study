import React from 'react'; 
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home/Home';
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import Features from './components/pages/Features/Features';
import "./assets/css/mystyle.css";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";

 
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/features"><Features/></Route>
        <Route exact path="/productdetail/:id"><ProductDetail/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

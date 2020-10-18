import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop/:handle" component={Detail} />
        {/* <Route path="/cart" component={Cart} /> */}
        {/* <Route path="/cart/checkout" component={Checkout} /> */}
      </Switch>
    </Router>
  );
}

export default App;

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
import Nav from "./components/Nav";
import Container from "./components/Container";

function App() {

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Home />
          </Route>
          <Route exact path="/shop">
            <Nav />
            <Shop />
          </Route>
          <Route path="/about">
            <Nav />
            <About />
          </Route>
          <Route path="/contact">
            <Nav />
            <Contact />
          </Route>
          <Route path="/shop/:product" render={(props) => {
            return (
              <div>
                <Nav />
                <Detail {...props} />
              </div>
            )
          }} />

          {/* <Route exact path="/cart">
            <Nav />
            <Cart />
          </Route>
          <Route path="/cart/checkout">
            <Nav />
            <Checkout />
          </Route> */}

        </Switch>
      </Router>
    </Container>
  );
}

export default App;

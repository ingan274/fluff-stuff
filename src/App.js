import React, { Component } from "react";
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
import CheckoutNav from "./components/CheckoutNav";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Fave from "./pages/Fave";

class App extends Component {

  constructor(props) {
    super(props);
    if (JSON.parse(localStorage.getItem("Cart")) === null) {
      this.state = {
        cart: 0
      }
    } else {
      let list = JSON.parse(localStorage.getItem("Cart"));

      let total = 0;
      for (let i = 0; i < list.length; i++) {
        let number = list[i].quant;
        total += number;
      }

      this.state = {
        cart: total
      }
    }
  }

  cartNum = () => {
    // console.log('cart is updating)')
    if (JSON.parse(localStorage.getItem("Cart")) === null) {
      this.setState({ cart: 0 })
    } else {
      let list = JSON.parse(localStorage.getItem("Cart"));

      let total = 0;
      for (let i = 0; i < list.length; i++) {
        let number = list[i].quant;
        total += number;
      }

      this.setState({ cart: total })
    }

  }

  render = () => {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Nav cartNum={this.state.cart} />
              <Home />
            </Route>
            <Route exact path="/shop">
              <Nav cartNum={this.state.cart} />
              <Shop />
            </Route>
            <Route path="/about">
              <Nav cartNum={this.state.cart} />
              <About />
            </Route>
            <Route path="/contact">
              <Nav cartNum={this.state.cart} />
              <Contact />
            </Route>
            <Route path="/shop/:product" render={(props) => {
              return (
                <div>
                  <Nav cartNum={this.state.cart} />
                  <Detail {...props} cartUpdate={this.cartNum} />
                </div>
              )
            }} />

            <Route exact path="/cart">
              <Nav cartNum={this.state.cart} />
              <Cart cartUpdate={this.cartNum} />
            </Route>

            <Route exact path="/favorites">
              <Nav cartNum={this.state.cart} />
              <Fave cartUpdate={this.cartNum}/>
            </Route>
            
            <Route path="/checkout">
              <CheckoutNav cartNum={this.state.cart} />
              <Checkout />
            </Route>

          </Switch>
        </Router>
      </Container >
    );
  }
}

export default App;

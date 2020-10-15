import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './App.css';
import Container from "./components/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import logo from "./assets/fullLogo.png"

function App() {
  return (
    <Container>
      <Router>
        <nav className='nav row'>
          <div className='leftNav col-10'>
            <NavLink exact={true} to='/' ><img id='logo' src={logo} alt="fluff stuff logo" /></NavLink>
            <NavLink exact={true} to="/" activeClassName='selected' className='navigation right' id="home">home</NavLink>
            <NavLink to="/shop" activeClassName='selected' className='navigation right' id="shop">shop</NavLink>
            <NavLink to="/about" activeClassName='selected' className='navigation right' id="about">about</NavLink>
            <NavLink to="/contact" activeClassName='selected' className='navigation right' id="contact">contact</NavLink>
          </div>
          <p className='navigation cart col-2'>cart</p>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop/:handle" component={Detail} />
        </Switch>
      </Router>
    </Container >
  );
}


export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './App.css';
import Container from "./components/Container";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShopPage from "./pages/Shop";
import Detail from "./pages/Detail";
import logo from "./assets/fullLogo.png"

function App() {
  return (
    <Container>
      <Router>
        <nav className='nav row'>
          <div className='leftNav col-10'>
            <Link to='/'><img id='logo' src={logo} alt="fluff stuff logo" /></Link>
            <Link to="/" className='navigation' id="home">home</Link>
            <Link to="/shop" className='navigation' id="shop">shop</Link>
            <Link to="/about" className='navigation' id="about">about</Link>
            <Link to="/contact" className='navigation' id="contact">contact</Link>
          </div>
          <p className='navigation cart col-2'>cart</p>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Container >
  );
}

function Shop() {
  let match = useRouteMatch();

  return (
    <ShopPage>
      <Switch>
        <Route path={`${match.path}/bed-pillow`} component={Detail} />
        <Route path={`${match.path}/couch-pillow`} component={Detail} />
        <Route path={`${match.path}/round-pillow`} component={Detail} />
        <Route path={`${match.path}/floor-pouf-pillow`} component={Detail} />
      </Switch>
    </ShopPage>
  );
}

function Home() {
  let match = useRouteMatch();

  return (
    <HomePage>
      <Switch>
        <Route path={`${match.path}/bed-pillow`} component={Detail} />
        <Route path={`${match.path}/couch-pillow`} component={Detail} />
        <Route path={`${match.path}/round-pillow`} component={Detail} />
        <Route path={`${match.path}/floor-pouf-pillow`} component={Detail} />
      </Switch>
    </HomePage>
  );
}

export default App;

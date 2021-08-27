import { HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import React from 'react';
import Biography from './components/Biography';
import ContactInfo from './components/ContactInfo';
import Home from './components/Home';
import MyWork from './components/MyWork';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/biography">Biography</Link>
        <Link to="/mywork">My Work</Link>
        <Link to="/contactinfo">Contact Info</Link>
      </nav>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/biography">
        <Biography />
      </Route>
      <Route path="/mywork">
        <MyWork />
      </Route>
      <Route path="/contactinfo">
        <ContactInfo />
      </Route>
    </Switch>
    </header>
    <Footer>
    </Footer>
    </Router>  
  );
}

export default App;

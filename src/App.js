import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Searchpage from './Searchpage';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    
    <div className="app">
      <Router>

      <Header />

      <Switch>
        <Route path="/search">
          <Searchpage />
        </Route>
         
         {/* Mettere Home Page sempre alla fine "/" perchè se non trova la prima va automaticamente all'ultima che è l'homepage */ }
        <Route path="/">
           <Home />
        </Route>     
      </Switch>

      <Footer />

      </Router>

    </div>
  );
}

export default App;

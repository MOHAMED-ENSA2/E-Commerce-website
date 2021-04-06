import React, { Component } from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import ProductPage from './pages/ProductPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";


  


function App() {
  return (
    <>
    <Router>
      <Header/>

      <Switch>
          <Route path = "/" exact>
            <Home/>
          </Route>
          <Route path = "/login">
             <SignIn/>
          </Route>
          <Route path = "/product/:id">
            <ProductPage/>
          </Route>
      </Switch>

      

      <Footer/>

    </Router>

    </>
  );
}

export default App;

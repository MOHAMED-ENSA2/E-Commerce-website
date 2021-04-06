import React, { Component } from 'react'
import "./Header.css"

function Header() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="left">
            <div className="logo"><a href="/">MEZIANISHOP</a></div>
              <form action="" className = "search">
                <input className = "text-search" type="text" />
                <input className = "btn-search" type="submit" value = "chercher"/>
              </form>
          </div>
          
          <div className="right">
            <div className = "cart"><i className="fas fa-shopping-cart"></i> <a href="#">panier</a></div>
            <div className="login"><i className="fa fa-user" aria-hidden="true"></i> <a href="/login">connexion</a> </div>
          </div>

        </div>
      </div>
      
    );
  }
  
  export default Header;
  
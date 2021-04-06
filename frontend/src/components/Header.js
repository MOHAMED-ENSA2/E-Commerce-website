import React, { Component } from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'

function Header() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="left">
            <div className="logo">
              <Link className = "logo-link" to = '/'>
                 MEZIANISHOP
              </Link>
              
            </div>
              <form action="" className = "search">
                <input className = "text-search" type="text" />
                <input className = "btn-search" type="submit" value = "chercher"/>
              </form>
          </div>
          
          <div className="right">
            <div className = "cart"><i className="fas fa-shopping-cart"></i> 
            <Link className="right-link" to = "/">
               panier
            </Link>
          
            </div>
            <div className="login"><i className="fa fa-user" aria-hidden="true"></i> 
            <Link className="right-link" to = "/login">
            connexion
            </Link>
             </div>
          </div>

        </div>
      </div>
      
    );
  }
  
  export default Header;
  
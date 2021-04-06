import React, { Component } from 'react'

// import './Rating.css'

function Rating(props) {
    return (
      <div >
          <div className="rating">
                <i style = {{color : "skyblue"}} className = {
                props.rateValue >= 1
                ? 'fas fa-star'
                    : props.rateValue >= 0.5 
                        ?   'fas fa-star-half-alt'
                        :   'far fa-star'
                
                } ></i>
                 <i style = {{color : "skyblue"}} className = {
                props.rateValue >= 2
                ? 'fas fa-star'
                    : props.rateValue >= 1.5 
                        ?   'fas fa-star-half-alt'
                        :   'far fa-star'
                
                } ></i>
                 <i  style = {{color : "skyblue"}} className = {
                props.rateValue >= 3
                ? 'fas fa-star'
                    : props.rateValue >= 2.5 
                        ?   'fas fa-star-half-alt'
                        :   'far fa-star'
                
                } ></i>
                 <i style = {{color : "skyblue"}} className = {
                props.rateValue >= 4
                ? 'fas fa-star'
                    : props.rateValue >= 3.5 
                        ?   'fas fa-star-half-alt'
                        :   'far fa-star'
                
                } ></i>
                 <i style = {{color : "skyblue"}} className = {
                props.rateValue >= 5
                ? 'fas fa-star'
                    : props.rateValue >= 4.5 
                        ?   'fas fa-star-half-alt'
                        :   'far fa-star'
                
                } ></i>
                <span style = {{marginLeft : "10px"}}>
                  {props.review} avis 
                </span>
                 
          </div>
      </div>
    );
  }
  
export default Rating;
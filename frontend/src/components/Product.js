import React, { Component } from 'react'
import './Product.css'
import Rating from './Rating';

function Product(props) {
    return (
      <div className="product">
        <a href={`/product/${props.id}`}>
          <img src={props.img} alt="image not found"/>
        </a>
        <a href={`/product/${props.id}`}>
            <h5>{props.name}</h5>
        </a>
        {/* <div className="rate">{props.rating} parmi {props.numReviews} avis</div> */}
        <Rating review = {props.numReviews} rateValue = {props.rating} />
        <h3>{props.price} DH</h3>
      </div>
    );
  }
  
export default Product;
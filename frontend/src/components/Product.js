import React, { Component } from 'react'
import './Product.css'
import Rating from './Rating';
import {Link} from 'react-router-dom'

function Product(props) {
    return (
      <div className="product">
        <Link to = {`/product/${props.id}`} >
           <img className = "img-product" src={props.img} alt="image not found"/>
        </Link>
        <Link to = {`/product/${props.id}`} >
           <h5 className = "name-product">{props.name}</h5>
        </Link>
{/* 
        <a href={`/product/${props.id}`}>
          <img src={props.img} alt="image not found"/>
        </a>
        <a href={`/product/${props.id}`}>
            <h5>{props.name}</h5>
        </a> */}
        {/* <div className="rate">{props.rating} parmi {props.numReviews} avis</div> */}
        <Rating review = {props.numReviews} rateValue = {props.rating} />
        <h3>{props.price} DH</h3>
      </div>
    );
  }
  
export default Product;



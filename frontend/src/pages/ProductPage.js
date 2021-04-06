import React from 'react'
import './ProductPage.css'
import products from '../products'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'



function ProductPage(props) {
  const {id} = useParams()
  const produit = products.find(element =>  element._id == id
        
        )



    return (
      <div className="productPage">
         <h3>Revenir</h3>

         <div className="product-container">
            <div className="product-present">
              <img src={produit.image} alt="no image"/>
              
            </div>
            <div className="product-details">
              <h2>{produit.name}</h2>
              <Rating review = {produit.numReviews} rateValue = {produit.rating} />
              <h5>{produit.price}</h5>
              <p>{produit.description}</p>

            </div>
            <div className="data-sheet">
                
            </div>

         </div>

         <div className = "buyers-reviews">

         </div>
         

    
      </div>
    );
  }
  
export default ProductPage;
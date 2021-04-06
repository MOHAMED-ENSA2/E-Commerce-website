import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './ProductPage.css'
// import products from '../products'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'


function ProductPage(props) {
  const {id} = useParams()
 
  // const produit = product.find(element =>  element._id == id)
  const [produit , setProduct] = useState([])

  useEffect( () => {
      async function fetchProduct(){
          const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
          setProduct(data)
      }
      fetchProduct()

  } , [] )
 



    return (
      <div className="productPage">
         <h3 style = {{  marginTop : '50px'}}> 
           <Link to = "/"  style = {{ color : "skyblue" }} >
               Revenir
           </Link>
         </h3>

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
                
                  <ul>
                    <li>Prix</li>
                    <li>{produit.price}</li>
                  </ul>
                  <ul>
                    <li>Etat</li>
                    <li>{
                      produit.countInStock == 0 
                      ? `non disponible`
                      : `disponible`
                      
                      }</li>
                  </ul>

                    <ul  >
                     <li>Qte</li>
                     <li>
 
                         <select className = "select-quantiy" disabled = {produit.countInStock == 0 }  name="" id="">
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                         </select>
 
                     </li>
                   </ul>


                  <button type = 'button' disabled = {produit.countInStock == 0 }> ajouter au panier</button> 
           

                 
                
                


            </div>

         </div>

         <div className = "buyers-reviews">

         </div>
         

    
      </div>
    );
  }
  
export default ProductPage;
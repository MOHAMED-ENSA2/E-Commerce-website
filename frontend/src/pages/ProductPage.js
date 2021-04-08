import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './ProductPage.css'
// import products from '../products'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import {Link, useHistory} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import {listProductDetails} from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'



function ProductPage(props) {
  

  const [qty,setQty] = useState(1)

  const {id} = useParams()
 
  // const produit = product.find(element =>  element._id == id)
  // const [produit , setProduct] = useState([])

  const dispatch  = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {loading,error,product} = productDetails
  useEffect( () => {

      // async function fetchProduct(){
      //     const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
      //     setProduct(data)
      // }
      // fetchProduct()
      dispatch(listProductDetails(id))

  } , [] )
 
  const produit = product



  const history = useHistory();
  const addToCart = () => {

    history.push(`/cart/${id}/?qty=${qty}`)
   
  }


    
    
    return (
      <div className="productPage" >
        { loading ? <Loader/> 
                  : error 
                  ? <Message>
                      {error}
                  </Message>
                  : < >
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
                                      <select className = "select-quantiy" disabled = {produit.countInStock == 0 }  onClick = { (val) => {setQty(val.target.value)  }} name="" id="">
                                        {
                                         
                                         [...Array(produit.countInStock).keys()].map( (value) => 
                                          <option key = {value + 1 } value= {value + 1}>{value + 1}</option>
                                          )
                                        }

                                      </select>
                                  </li>
                                </ul>
                              <button type = 'button' disabled = {produit.countInStock == 0 } onClick = { addToCart}> ajouter au panier</button>
                  
                  
                  
                  
                        </div>
                      </div>
                      <div className = "buyers-reviews">
                      </div>
                  
                  </>

        }


       
      </div>
    );
  }
  
export default ProductPage;
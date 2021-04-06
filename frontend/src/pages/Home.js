import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Product from '../components/Product.js'
// import products from  '../products.js'
import './Home.css'


function Home() {
    const [products , setProducts] = useState([])

    useEffect( () => {
        async function fetchProducts(){
            const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
            setProducts(data)
        }
        fetchProducts()

    } , []

    )

    return (


        <div className = "home">

        <h1 style = {{marginLeft : '10%' , marginTop : '40px' , padding : '10px' }}>LES DERNIERS PRODUITS </h1>
        <div className = "products">
            {
                products.map(
                    product => (
                    <Product key = {product._id} name = {product.name} img = {product.image} rating = {product.rating} price = {product.price} numReviews = {product.numReviews} id = {product._id}></Product>
                        )
                    
                )
            }

        </div>

        <div className = "products">
            {
                products.map(
                    product => (
                    <Product key = {product._id} name = {product.name} img = {product.image} rating = {product.rating} price = {product.price} numReviews = {product.numReviews} id = {product._id}></Product>
                        )
                    
                )
            }

        </div>
        </div>
    )
}

export default Home

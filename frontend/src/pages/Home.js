import React from 'react'
import Product from '../components/Product.js'
import products from  '../products.js'
import './Home.css'


function Home() {
    return (


        <div className = "home">

        <h1 style = {{marginLeft : '10%' , padding : '10px' }}>LES DERNIERS PRODUITS </h1>
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

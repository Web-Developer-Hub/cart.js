import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
const [products, setProducts] = useState([])
    
useEffect(() => {
    const URL = '../../fack_data/./data.json';
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
}, [])
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>This is my shop!</h1>
            <div className="conatiner">
                {
                    products.map((product) => {
                        return (
                            <Product
                                key={product._id}
                                product={product}
                            >

                            </Product>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;
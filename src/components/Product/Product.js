import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fackDb';
import './Product.css'

const Product = (props) => {
    const {
        _id,
        title,
        balance,
        email,
        isActive,
        eyeColor,
        company,
        discription
    } = props.product;

    //buton handler function here and set local storage...
    const handlerBuy = (id) => {
        console.log(id)
        addToDb(id);
    }

    // remove cart
    const handlerRemove = (id) => {
        deleteFromDb(id)
    }
    
    // const withParam = (id) => handlerBuy(id) 
    return (
        <div className="child">
            <h3>_ID: {_id}</h3>
            <h3>Title: {title}</h3>
            <h3>Price: {balance}</h3>
            <h3>Brand: {company}</h3>
            <h3>Product Status: {isActive}</h3>
            <h3>Color: {eyeColor}</h3>
            <h3>Email: {email}</h3>
            <h3>Discription: {discription.slice(0, 50)}</h3>
            <button onClick={() => { handlerBuy(_id) }} className="buy">Buy Now</button>
            <button onClick={() => {handlerRemove(_id)}} className="remove">Remove</button>
            {/* <button onClick={() => handlerBuy(_id)} className="buy">Buy Now</button>  therr are same this call handlerBuy funtion...*/}
            {/* <button onClick={() => withParam(_id)} className="buy">Buy Now</button>  this call withParam funtion then work*/}
        </div>
    );
};

export default Product;
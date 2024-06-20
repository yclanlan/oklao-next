'use client'
import React from "react";
import "./Product.css";
import { useStateValue } from "../context/StateProvider";


function Product({ id,  title, category, description, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        category:category,
        description: description,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">


        <div className="product__brand">
          
        
        <hr style={{ border:"1px solid #000",marginTop:"3vh",marginBottom:"10px"}} />
            <p>{title}</p>
            <div className="product__brand-category">
            <p>{category}</p>
            </div>
            
            <br></br>
            <div className="product__imageContainer">
            <img src={image} alt="" />
            </div>
            
        </div>
        <br/>

      <div className="product__info_description">
      
        <p>{description}</p>
        <br/>
        
      </div>
      <div className="product__info">
      <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))}

        </div>
        <br/><br/>
        </div>

  

        <button onClick={() => addToBasket(id)}>Add to Cart</button>

    </div>
  );
}

export default Product;
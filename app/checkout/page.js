'use client'
import React from "react";
import "./CheckOut.css";
import Header from "../../component/header/Header"
import Subtotal from "../../component/products/Subtotal";
import { useStateValue } from "../../component/context/StateProvider";
import CheckoutProduct from "../../component/products/CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (<>
    <Header />
    <div className="checkout">
      <div className="checkout__left">
 

        <div>
        <br/>
          <h3>Hello, {user?.email}</h3>
          <br/><br/>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket && basket.length > 0 ? (
          basket.map(item => (
         
            <CheckoutProduct
              key={item.id}
              id={item.id}
              brand={item.brand}
              category={item.category}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            
            
          )) ):(
            <p><br/> &nbsp; Your Basket is empty.
            </p>
          ) 

          }

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
    </>
  );
}

export default Checkout;
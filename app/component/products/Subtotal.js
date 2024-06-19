'use client'
import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../context/Reducer';
import { useRouter } from 'next/navigation';

function Subtotal() {
  const router  = useRouter(); 
  const [{basket}, dispatch] = useStateValue();
  
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value)=> (
            <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{`${value}`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox"/> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
  <br/>
      <button onClick={ () => router.push('/payment')}> Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
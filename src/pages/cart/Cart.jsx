import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { FaRupeeSign } from 'react-icons/fa';
import CartCard from '../../component/cart/CartCard';
import './cart.css'
function Cart() {
  return (
    <div className='cart-page'>
        <div className='cart-content'>
            <div className='resto-details'>
                <h3>Rozario Bakers And Caters</h3>
                <div className='details'>3 items | ETA 25-30 MINS</div>
            </div>
            <div>
                <CartCard/>
                <CartCard/>
                <CartCard/>
            </div>
            <div className='cart-total-price'>
              <div>Grand Total</div>
              <div><FaRupeeSign size={14}/> 3000</div>
            </div>
        </div>
    </div>
  )
}

export default Cart
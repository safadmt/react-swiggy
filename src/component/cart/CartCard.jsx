import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import '../../pages/cart/cart.css'
function CartCard() {
  return (
    <div className="menu-item-card">
        <div>Appam</div>
      <div className="incdec-btn">
        
        <div className="inc-dec-btn">
          <div>
            <FiMinus />
          </div>
          <div>3</div>
          <div>
            <AiOutlinePlus />
          </div>
        </div>
      </div>
      <div>1000</div>
    </div>
  );
}

export default CartCard;

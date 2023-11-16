import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemsInCart = 5; // Número hardcoreado (puedes cambiarlo)

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="cart-notification">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;

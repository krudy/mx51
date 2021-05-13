import React from 'react';

import '../../public/cart.css';

const calculateCartTotal = (cart) => {
  let total = 0.0;
  cart.forEach((product) => {
    total += product.quantity * product.price;
  });
  return total;
};

const updateProductQuantity = (cart, updater, productTitle, newQuantity) => {
  const updatedCart = cart
    .map((item) => {
      if (item.title !== productTitle) return item;
      if (item.title === productTitle) {
        return { ...item, quantity: newQuantity };
      }
    })
    .filter((item) => {
      return item.quantity > 0;
    });
  updater(updatedCart);
};

const Cart = ({ cart, updateCart }) => (
  <div className="cart-container">
    <div className="cart-wrapper">
      <div className="cart-header">Order</div>
      <div className="cart-content">
        <ul className="cart-list">
          {cart.map((product, index) => (
            <li className="cart-list_item" key={product.title + index}>
              <div className="cart-list_item-amount">
                <button
                  className="cart-list_item-amount-minus"
                  onClick={() => {
                    const newQuantity = product.quantity - 1;
                    updateProductQuantity(
                      cart,
                      updateCart,
                      product.title,
                      newQuantity,
                    );
                  }}
                >
                  -
                </button>
                <div className="cart-list_item-amount-multiplier">
                  {product.quantity}
                </div>
                <button
                  className="cart-list_item-amount-plus"
                  onClick={() => {
                    const newQuantity = product.quantity + 1;
                    updateProductQuantity(
                      cart,
                      updateCart,
                      product.title,
                      newQuantity,
                    );
                  }}
                >
                  +
                </button>
              </div>
              <div className="cart-list_item-title">{product.title}</div>
              <div className="cart-list_item-total">
                ${product.quantity * product.price}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-footer">
        <div className="cart-footer-total">
          <div className="cart-footer-total_title">Total</div>
          <div className="cart-footer-total_amount">
            ${calculateCartTotal(cart)}
          </div>
        </div>
        <button className="cart-footer-button">Pay</button>
      </div>
    </div>
  </div>
);

export default Cart;

import React from 'react';

import '../../public/cart.css';

const Cart = () => (
  <div className="cart-container">
    <div className="cart-wrapper">
      <div className="cart-header">Order</div>
      <div className="cart-content">
        <ul className="cart-list">
          <li className="cart-list_item">
            <div className="cart-list_item-amount">
              <button className="cart-list_item-amount-minus">-</button>
              <div className="cart-list_item-amount-multiplier">1</div>
              <button className="cart-list_item-amount-plus">+</button>
            </div>
            <div className="cart-list_item-title">Chicken Burger</div>
            <div className="cart-list_item-total">$12</div>
          </li>
          <li className="cart-list_item">
            <div className="cart-list_item-amount">
              <button className="cart-list_item-amount-minus">-</button>
              <div className="cart-list_item-amount-multiplier">1</div>
              <button className="cart-list_item-amount-plus">+</button>
            </div>
            <div className="cart-list_item-title">Chicken Burger</div>
            <div className="cart-list_item-total">$12</div>
          </li>
        </ul>
      </div>
      <div className="cart-footer">
        <div className="cart-footer-total">
          <div className="cart-footer-total_title">Total</div>
          <div className="cart-footer-total_amount">$76.00</div>
        </div>
        <button className="cart-footer-button">Pay</button>
      </div>
    </div>
  </div>
);

export default Cart;

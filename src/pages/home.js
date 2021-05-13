import React, { useState } from 'react';

import Products from '../components/Products';
import Cart from '../components/Cart';
import '../../public/index.css';

const Homepage = () => {
  const [cart, updateCart] = useState([]);
  return (
    <div className="container">
      <div className="wrapper">
        <Products cart={cart} updateCart={updateCart} />
        <Cart cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
};

export default Homepage;

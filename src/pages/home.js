import React from 'react';

import Products from '../components/Products';
import Cart from '../components/Cart';
import '../../public/index.css';

const Homepage = () => (
  <div className="container">
    <div className="wrapper">
      <Products />
      <Cart />
    </div>
  </div>
);

export default Homepage;

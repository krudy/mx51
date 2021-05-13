import React from 'react';

import '../../public/products.css';

const productList = [
  {
    sectionName: 'burger',
    list: [
      {
        title: 'Chicken Burger',
        image: '/assets/chickenBurger.jpg',
        price: 12.0,
      },
      {
        title: 'Vegan Burger',
        image: '/assets/veganBurger.jpg',
        price: 12.0,
      },
      {
        title: 'Beef Burger',
        image: '/assets/beefBurger.jpg',
        price: 12.0,
      },
      {
        title: 'Lamb Burger',
        image: '/assets/lambBurger.jpg',
        price: 12.0,
      },
    ],
  },
  {
    sectionName: 'sides',
    list: [
      { title: 'Large Fries', image: '/assets/fries.jpg', price: 7.0 },
      { title: 'Small Fries', image: '/assets/fries.jpg', price: 4.0 },
    ],
  },
  {
    sectionName: 'drinks',
    list: [{ title: 'Coke', image: '/assets/coke.jpg', price: 3.5 }],
  },
];

const addToCart = (cart, updater, product) => {
  let isDuplicate = false;
  cart.forEach((item) => {
    if (item.title === product.title) isDuplicate = true;
  });
  if (isDuplicate) return;
  const updatedCart = [...cart, { quantity: 1, ...product }];
  updater(updatedCart);
};

const Products = ({ cart, updateCart }) => (
  <div className="products-container">
    <div className="products-wrapper">
      <div className="products-header">Products</div>
      <div className="products-content">
        {productList.map((section) => (
          <div className="products-section" key={section.sectionName}>
            <div className="products-section_header">{section.sectionName}</div>
            <ul className="products-section_list">
              {section.list.map((product) => (
                <li key={product.title}>
                  <div
                    className="products-section_card"
                    onClick={() => addToCart(cart, updateCart, product)}
                  >
                    <img
                      className="products-section_card-image"
                      src={product.image}
                    />
                    <div className="products-section_card-title">
                      {product.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Products;

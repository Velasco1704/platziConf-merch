import React from 'react';
//Components
import { Product } from '../components/Product';
//Context
import { useAppContext } from '../context/AppContext';
//Styles
import '../styles/Products.css';

export const Products = () => {
  const { state, addToCart } = useAppContext();
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product)
  };

  return (
    <div className='Products'>
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};


import React, { useState, useEffect } from 'react';

import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch('http://localhost:3000/api/v1/products/');
      const { data } = await response.json();
      setProducts(data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (!products.length) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <section>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          price={product.price}
          discount={product.discountPercentage}
          stock={product.stock}
        />
      ))}
    </section>
  );
};

export default ProductsPage;

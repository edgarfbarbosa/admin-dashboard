import React, { useState, useEffect } from 'react';

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

  if (products.length === 0) return <p>Carregando produtos...</p>;

  return (
    <React.Fragment>
      {products.map((product) => {
        return (
          <React.Fragment key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default ProductsPage;

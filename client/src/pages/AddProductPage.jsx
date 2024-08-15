import React, { useState } from 'react';

const AddProductPage = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [stock, setStock] = useState('');

  async function handleProductRegistration(e) {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/api/v1/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category,
          name,
          price: parseInt(price),
          discountPercentage: parseInt(discount),
          stock: parseInt(stock)
        })
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <section>
      <div className="card bg-neutral w-96 shadow-x1">
        <form className="card-body" onSubmit={handleProductRegistration}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Categoria"
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Nome do produto"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Preço do produto"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Desconto do produto"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Estoque do produto"
              onChange={(e) => setStock(e.target.value)}
            />
          </label>
          <div className="card-actions justify-end">
            <button type="submit" className="btn">
              Enviar produto
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;

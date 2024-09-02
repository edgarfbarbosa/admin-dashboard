import { useState } from 'react';

import Input from '../components/Form/Input';
import Select from '../components/Form/Select';

const ProductRegisterPage = () => {
  const [category, setCategory] = useState('mouses');
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
          category: category.charAt(0).toUpperCase() + category.substring(1),
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

  function handleCategoryChange({ target }) {
    setCategory(target.value);
  }

  function handleNameChange({ target }) {
    setName(target.value);
  }

  function handlePriceChange({ target }) {
    setPrice(target.value);
  }

  function handleDiscountChange({ target }) {
    setDiscount(target.value);
  }

  function handleStockChange({ target }) {
    setStock(target.value);
  }

  return (
    <section>
      <div className="card bg-neutral w-96 shadow-x1">
        <form className="card-body" onSubmit={handleProductRegistration}>
          <Select
            label="Categoria:"
            value={category}
            onChange={handleCategoryChange}
          />
          <Input
            label="Nome do produto:"
            type="text"
            placeholder="Nome do produto..."
            value={name}
            onChange={handleNameChange}
          />
          <Input
            label="Preço do produto:"
            type="text"
            placeholder="Preço do produto..."
            value={price}
            onChange={handlePriceChange}
          />
          <Input
            label="Desconto do produto:"
            type="text"
            placeholder="Desconto do produto..."
            value={discount}
            onChange={handleDiscountChange}
          />
          <Input
            label="Estoque do produto:"
            type="text"
            placeholder="Estoque do produto..."
            value={stock}
            onChange={handleStockChange}
          />
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

export default ProductRegisterPage;

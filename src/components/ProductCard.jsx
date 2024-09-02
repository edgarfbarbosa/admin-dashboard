import React from 'react';

const ProductCard = ({ name, price, discount, stock }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-x1">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <span className="badge badge-lg badge-outline">{`Restam: ${stock} un.`}</span>
        <div>
          <p>{`R$${price.toFixed(2).toString().replace('.', ',')}`}</p>
          <p>{`${discount}% de desconto pagando com Pix`}</p>
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-outline">
            {`Adicionar ao carrinho`.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react'
import { ProductList } from '../helpers/productList';
import ProductItem from '../Components/ProductItem';
import '../styles/Produtos.css'

function Produto() {
  return (
    <div className="product">
      <h1 className="productTitle">Produtos</h1>
      <div className="productList">
        {ProductList.map((productItem, key) => {
          return (
            <ProductItem
              key={key}
              image={productItem.image}
              name={productItem.name}
              price={productItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Produto;
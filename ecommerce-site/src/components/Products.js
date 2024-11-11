import React from 'react';
import styled from 'styled-components';

// Стили для компонента
const ProductsWrapper = styled.section`
  padding: 100px 30px 50px;
  background-color: #f4f4f4;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: left;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h3 {
    font-size: 24px;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    color: #777;
  }

  .price {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

const Products = ({ products }) => {
  return (
    <ProductsWrapper id="products">
      <h2>Our Products</h2>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsWrapper>
  );
};

export default Products;

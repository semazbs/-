import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const Pagination = styled.div`
  margin-top: 20px;

  button {
    padding: 10px 15px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }

    &.active {
      background-color: #0056b3;
      font-weight: bold;
    }
  }
`;

// Основной компонент
const Products = () => {
  const [products, setProducts] = useState([]); // Все товары
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница
  const itemsPerPage = 5; // Количество товаров на странице

  useEffect(() => {
    // Запрос товаров с API
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data); // Сохраняем товары в состояние
      })
      .catch(error => {
        console.error('Ошибка при загрузке товаров:', error);
      });
  }, []);

  // Логика пагинации
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem); // Текущие товары

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ProductsWrapper id="products">
      <h2>Our Products</h2>
      <ProductGrid>
        {currentItems.map(product => (
          <ProductCard key={product.id}>
            <img src={product.image_url || 'https://via.placeholder.com/250'} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
          </ProductCard>
        ))}
      </ProductGrid>

      {/* Пагинация */}
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </Pagination>
    </ProductsWrapper>
  );
};

export default Products;

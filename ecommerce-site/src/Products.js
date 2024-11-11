import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
  });

  // Получаем товары с сервера
  useEffect(() => {
    axios
      .get('http://localhost:5000/products')  // Порт 5000 для вашего сервера на Express
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Обработчик изменения данных в форме
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Обработчик отправки формы для добавления нового товара
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/products', newProduct)  // Порт 5000 для вашего сервера на Express
      .then((response) => {
        setProducts([...products, response.data]);  // Добавляем новый товар в список
        setNewProduct({
          name: '',
          description: '',
          price: '',
          stock: '',
          category: '',
        });  // Очищаем форму
      })
      .catch((error) => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h1>Products</h1>

      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <input
          type="number"
          name="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
          placeholder="Stock"
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <button type="submit">Add Product</button>
      </form>

      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

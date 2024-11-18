import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Products from './components/Main';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/products')  // Ваш сервер Express
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <Header />
      <Products products={products} />
      <Footer />
    </div>
  );
}

export default App;

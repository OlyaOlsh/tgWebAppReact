
import "./../preFolder/PreAddPro.css";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../firebase.js';

const PreAddPro = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  // Используем useEffect для загрузки данных из Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      } catch (err) {
        setError('Ошибка получения товаров');
      }
    };
    
    fetchProducts();
  }, []); // Пустой массив зависимостей для выполнения только один раз при монтировании

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
  };

  // Фильтруем продукты на основе поискового запроса
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  const handleAddProduct = () => {
    console.log('Переход на страницу добавления продукта');
  };

  return (
    <div className="app-container">
      <input 
        type="text" 
        placeholder="Поиск" 
        className="search-input" 
        value={searchTerm} 
        onChange={handleSearch}
      />
      {error && <p className="error-message">{error}</p>}
      <div className="products-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-img" />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="add-button" onClick={handleAddProduct}>Добавить продукт</button>
    </div>
  );
};

export default PreAddPro;
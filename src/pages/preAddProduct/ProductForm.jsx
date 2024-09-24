import React, { useState } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db} from './../../../src/firebase.js';


const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [highPriority, setHighPriority] = useState(false);





  const addProduct = async () => {
  
    e.preventDefault();

    // Проверка, что изображение добавлено
    if (!imageUrl) {
      alert('Пожалуйста, добавьте изображение товара.');
      return;
    }

    
    try {
      await addDoc(collection(db, 'products'), {
          name,
          description,
          price: parseFloat(price),
          imageUrl,
          highPriority,

      });
      alert('Товар добавлен');
      setName('');
      setDescription('');
      setPrice('');
      setImageUrl('');
      setHighPriority(false);
  } catch (err) {
      setError('Ошибка добавления товара');
  }
  }


  const isFormValid = name && price && imageUrl;

  return (
    <div className="container_productform">
      <h1>Добавление товара</h1>
      <form onSubmit={addProduct}>
        <div className="form-group">
          <label htmlFor="name_text">Введите название товара:</label>
          <input
            type="text"
            id="name_text"
            autocomplete="new-password"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Введите цену товара:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Опишите товар:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Добавить изображение:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImageUrl(e.target.files[0])}
          />
          {imageUrl && <img src={URL.createObjectURL(imageUrl)} alt="Товар" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </div> 
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              placeholder="Высокий приоритет" 
              checked={highPriority}
              onChange={(e) => setHighPriority(e.target.checked)}
            />
            Высокий приоритет
          </label>
        </div>
        <button type="submit" disabled={!isFormValid}>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default ProductForm;


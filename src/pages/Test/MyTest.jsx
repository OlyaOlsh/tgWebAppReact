import firebase from 'firebase/compat/app';
import './../../../src/firebase.js';
import React, { useState } from 'react';
import './MyTest.css';
import 'firebase/firestore';
import 'firebase/storage';
import { db, storage } from './../../../src/firebase.js';

import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';




const MyTest = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [highPriority, setHighPriority] = useState(false);
  const [file, setFile] = useState(null);


  const handleSave = async () => {
    if (!name || !price) {
      alert('Пожалуйста, заполните все обязательные поля и добавьте изображение.');
      return;
    }

    try {
     /* Загрузка изображения в Firebase Storage*/
      const storageRef = ref(storage, `images/${file.name}`);
      /*await storageRef.put(file);*/
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);
      setImageUrl(downloadUrl);

      // Сохранение данных в Firestore
      await addDoc(collection(db, 'products'), {
        name,
        price: parseFloat(price),
        description,
        imageUrl : downloadUrl ,
        highPriority,
      });

      alert('Данные успешно сохранены.');
      setName('');
      setDescription('');
      setPrice('');
      setImageUrl('');
      setFile(null);

    } catch (error) {
      console.error('Ошибка при сохранении данных:', error);
      alert('Произошла ошибка при сохранении данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  return (
    <div className="container">
      <header>
        <button className="back-button">Назад</button>
        <h1>Компания</h1>
      </header>
      <main>
        <div className="form-group">
          <label htmlFor="category">Категория</label>
          <select id="category" className="input-field">
            <option value="dress">Платья</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="productName">Название продукта</label>
          <input
            type="text"
            id="productName"
            className="input-field"
            placeholder="Введите название продукта"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Цена</label>
          <input
            type="number"
            id="price"
            className="input-field"
            placeholder="Введите цену продукта"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Описание</label>
          <textarea
            id="description"
            className="input-field"
            placeholder="Опишите продукт (необязательно)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="imageUpload">Добавить изображение</label>
          <div className="image-upload">
            {imageUrl ? (
              <img src={imageUrl} alt="" id="uploadedImage" />
            ) : (
              <input type="file" id="imageUpload" onChange={handleImageUpload} />
            )}
          </div>
        </div>

        <div className="form-group switch-group">
          <label htmlFor="featured">Высокий приоритет</label>
          <label className="switch">
            <input
              type="checkbox"
              id="featured"
              checked={highPriority}
              onChange={(e) => setHighPriority(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </main>
      <footer>
        <button className="save-button" onClick={handleSave}>
          Сохранить
        </button>
      </footer>
    </div>
  )
}
export default MyTest;
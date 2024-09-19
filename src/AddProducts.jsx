import React, { useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../src/firebase.js'; // Импортируйте вашу конфигурацию Firebase


const AddProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    const addProduct = async () => {
        try {
            await addDoc(collection(db, 'products'), {
                name: 'Тестовый',
                description: 'Описание 2'
            });
            alert('Товар добавлен');
        } catch (err) {
            setError('Ошибка добавления товара');
        }
    };

    const fetchProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
        } catch (err) {
            setError('Ошибка получения товаров');
        }
    };

    return (
        <div>
            <main className="section">
                <div className="container">
                    <h1>Приложение с Firebase</h1>
                    <button onClick={addProduct}>Добавить товар</button>
                    <button onClick={fetchProducts}>Показать</button>
                    {error && <p>{error}</p>}
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>{product.description}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default AddProducts;

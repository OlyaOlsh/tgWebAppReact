import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { db} from '../firebase.js';
import DropZone from '../utils/dropZone.js'; // Импортируйте компонент DropZone
import './AddProducts.css';






const AddProducts = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    {/* const [currentImageUrl, setCurrentImageUrl] = useState(''); // Новое состояние для изображения*/}
    const [error, setError] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [imageFile, setImageFile] = useState(null);

    const addProduct = async () => {
        //Проверки - что добавили файл
      {/* if (!setImageUrl) {
            setError('Пожалуйста, выберите изображение.');
            return;
        } 
    
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!validImageTypes.includes(setImageUrl.type)) {
            setError('Неподдерживаемый формат изображения. Пожалуйста, загрузите JPEG, PNG или GIF.');
            return;
        }
    
        const maxSize = 5 * 1024 * 1024; // 5 МБ
        if (setImageUrl.size > maxSize) {
            setError('Размер изображения не должен превышать 5 МБ.');
            return;
        }*/}
    
        // Логика загрузки файла в Firebase и добавления продукта в Firestore

        try {
            await addDoc(collection(db, 'products'), {
                name,
                description,
                price: parseFloat(price),
                imageUrl,
            });
            alert('Товар добавлен');
            setName('');
            setDescription('');
            setPrice('');
            setImageUrl('');
        } catch (err) {
            setError('Ошибка добавления товара');
        }

    };

    const fetchProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
           {/*if (productsList.length > 0) {
                setCurrentImageUrl(productsList[0].imageUrl); // Устанавливаем URL первого продукта
            }*/}
        } catch (err) {
            setError('Ошибка получения товаров');
        }
    };

    const deleteSelectedProducts = async () => {
        try {
            for (const product of selectedProducts) {
                await deleteDoc(doc(db, 'products', product.id));
                await deleteObject(ref(storage, product.imageUrl));
            }
            setSelectedProducts([]);
            fetchProducts();
        } catch (err) {
            setError('Ошибка удаления товаров');
        }
    };

    const toggleProductSelection = (product) => {
        if (selectedProducts.includes(product)) {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
        } else {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    return (
        <div>
        <main class="section">
            <div class="container">
                <h1>Добавить товар</h1>
                <input 
                    type="text" 
                    placeholder="Название" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="input-field"
                />
                <input 
                    type="text" 
                    placeholder="Описание" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="input-field"
                />
                <input 
                    type="number" 
                    placeholder="Цена" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    className="input-field"
                />
   
                  <DropZone onFileUpload={setImageUrl} /> {/* Использование DropZone */}
                  {imageUrl && <img src={imageUrl} alt="Предпросмотр" style={{ width: '100px', height: 'auto' }} />}
                <div className="button-group">
                    <button onClick={addProduct} disabled={!name || !description || !price || !imageUrl} className="button">
                        Добавить товар
                    </button>
                    <button onClick={fetchProducts} className="button">
                        Показать
                    </button>
                    <button onClick={deleteSelectedProducts} disabled={selectedProducts.length === 0} className="button">
                        Удалить записи
                    </button>
                </div>
                {error && <p className="error-message">{error}</p>}


              {/*  <div style={styles.productList}>
                    {products.map(product => (
                        <li key={product.id}>
                            <input type="checkbox"checked={selectedProducts.includes(product)}onChange={() => toggleProductSelection(product)} />
                         <div style={styles.productDetails}>   
                         <Text style={styles.productName}>{product.name}: {product.description}</Text> 
                         <Text style={styles.productPrice}>{product.price}₽</Text> 
                         {product.imageUrl && <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: 'auto' }} />}
                         </div>
                         <div style={styles.arrow}>&#x279C;</div>
                        </li>
                    ))}                 
                </div>*/}



            </div>
        </main>
    </div>
    
    );
};

export default AddProducts;










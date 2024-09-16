import React, { useState} from 'react';
import "./AddProduct.css";

import { products } from '../../components/helpers/productsList';



const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({ title: '', price: '', description: '', img: '' });

    const handleAddProduct = () => {
        // Здесь можно добавить логику для добавления нового товара
        const updatedProducts = [...products, { id: Date.now().toString(), ...newProduct }];
        console.log(updatedProducts); // Выведите обновленный список продуктов в консоль или выполните другие действия
        // Например, вы можете сохранить updatedProducts в состоянии или отправить на сервер
    };

    return (
        <div>
            <h3>Добавить новый товар</h3>
            <input
                className={'input'}
                type="text"
                placeholder="Название"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            />
            <input
                className={'input'}
                type="number"
                placeholder="Цена"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <input
                className={'input'}
                type="text"
                placeholder="Описание"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
            <input
                className={'input'}
                type="text"
                placeholder="Ссылка на изображение"
                value={newProduct.img}
                onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
            />
            <button onClick={handleAddProduct}>Добавить товар</button>
        </div>
    );
};

export default AddProduct;
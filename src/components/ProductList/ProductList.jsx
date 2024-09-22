import React, {useState} from 'react';

import './ProductListStyle.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

import {useCallback, useEffect} from "react";

import { products } from '../helpers/productsList';

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}


const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const [searchTerm, setSearchTerm] = useState('');

    const [sortKey, setSortKey] = useState(null); // Изначально сортировка не выбрана
    const [order, setOrder] = useState('asc');


    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


     // Сортируем только если выбран sortKey
     const sortedProducts = sortKey ? [...filteredProducts].sort((a, b) => {
        if (sortKey === 'price') {
            return order === 'asc' ? a.price - b.price : b.price - a.price; // Сортировка по цене
        } else if (sortKey === 'title') {
            return order === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title); // Сортировка по названию
        }
        return 0;
    }) : filteredProducts;


    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div>
        <div className ="search-container">
        <input type="text" placeholder="Поиск по названию" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>

        <div className="sort-container">
                <select onChange={(e) => setSortKey(e.target.value)} defaultValue="">
                    <option value="" disabled>Сортировка</option>
                    <option value="price">По возрастанию цены</option>
                    <option value="price_desc">По убыванию цены</option> 
                    <option value="title">По названию</option>
                </select>
        </div>

        <div className={'list'}>
            {sortedProducts.map((item, index)  => (
                <ProductItem key = {item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'product-item'}
                    index = {index}
                />
            ))}
        </div>
    </div>

    );
};

export default ProductList;

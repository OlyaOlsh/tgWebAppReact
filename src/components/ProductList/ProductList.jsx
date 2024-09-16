 import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

import { products } from '../helpers/productsList';

{/*import curImage1  from "./../../imagesItem/img1.png";
import curImage2  from "./../../imagesItem/img2.png";
import curImage3  from "./../../imagesItem/img3.png";
import curImage4  from "./../../imagesItem/img4.png";
import curImage5  from "./../../imagesItem/img5.png";
import curImage6  from "./../../imagesItem/img6.png";
import curImage7  from "./../../imagesItem/img7.png";
import curImage8  from "./../../imagesItem/img8.png";

import curImageBig1  from "./../../imagesItem/imageBig1.jpg";
import curImageBig2  from "./../../imagesItem/imageBig2.jpg";
import curImageBig3  from "./../../imagesItem/imageBig3.jpg";
import curImageBig4  from "./../../imagesItem/imageBig4.jpg";
import curImageBig5  from "./../../imagesItem/imageBig5.jpg";
import curImageBig6  from "./../../imagesItem/imageBig6.jpg";
import curImageBig7  from "./../../imagesItem/imageBig7.jpg";
import curImageBig8  from "./../../imagesItem/imageBig8.jpg";


const products = [
    {id: '1', title: 'Яблоки', price: 5000, description: 'Вкусные', img: curImage1, imgBig: curImageBig1},
    {id: '2', title: 'Апельсины', price: 1200, description: 'Спелые', img: curImage2, imgBig: curImageBig2},
    {id: '3', title: 'Персики', price: 5000, description: 'Вкусные', img: curImage3, imgBig: curImageBig3},
    {id: '4', title: 'Лимоны', price: 122, description: 'Вкусные', img: curImage4, imgBig: curImageBig4},
    {id: '5', title: 'Манго', price: 5000, description: 'Спелое', img: curImage5, imgBig: curImageBig5},
    {id: '6', title: 'Вишня', price: 600, description: 'Спелая', img: curImage6, imgBig: curImageBig6},
    {id: '7', title: 'Бананы', price: 5500, description: 'Вкусные', img: curImage7, imgBig: curImageBig7},
    {id: '8', title: 'Ананас', price: 1200, description: 'Вкусный', img: curImage8, imgBig: curImageBig8},
]*/}

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

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
        <div className={'list'}>
            {products.map((item, index)  => (
                <ProductItem key = {item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                    index = {index}
                />
            ))}
        </div>
    );
};

export default ProductList;
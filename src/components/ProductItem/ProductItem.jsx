import React, { useState, useEffect } from 'react';
import Button from "../Button/Button";

import './../ProductList/ProductListStyle.css';
import { NavLink } from 'react-router-dom';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { TelegramShareButton, TelegramIcon } from 'react-share';
import { FaTelegramPlane } from 'react-icons/fa';

const webAppUrl = 'https://tg-web-app-react-teal.vercel.app';


const ProductItem = ({product, className, onAdd, index}) => {

    const onAddHandler = (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        onAdd(product);
    }

    const [isFavorite, setIsFavorite] = useState(false);

    // Загрузка состояния избранного из localStorage при монтировании компонента
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(product.id));
    }, [product.id]);

    const toggleFavorite = (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(product.id)) {
            // Удаление из избранного
            const updatedFavorites = favorites.filter(id => id !== product.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            // Добавление в избранное
            favorites.push(product.id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return (
        <div className='product-item-grid'>
        <NavLink to={`/product/${index}`}>
        <div className= {'product'+ className}>
            <div className={'product-item'}>
                <div style={{ position: 'relative' }}>
                    <div className='favorite-btn' onClick={toggleFavorite}>
                        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
                    </div>

                    <img src={product.img} alt="Product img" className='img' />
              
                    <TelegramShareButton 
                        url={`https://tg-web-app-react-teal.vercel.app/product/${index}`} 
                        title={product.title}
                        className='telegram-btn'
                    >
                        <FaTelegramPlane size={24} color = "#fff"/>
                    </TelegramShareButton>

                <div className="product-details">
                    <div className={'product-name'}>{product.title}</div>
                    <div className={'product-description'}>{product.description}</div>
                    <div className={'product-price'}>
                        <span><b>{product.price} руб.</b></span>
                    </div>
                
               
                <Button className={'add-btn'} onClick={onAddHandler}>
                    Добавить в корзину
                </Button>
                </div>
             </div>
            </div>
            </div>   
        </NavLink>
    </div>
    );
};

export default ProductItem;






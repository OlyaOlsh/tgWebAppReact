import React, { useState, useEffect } from 'react';
import Button from "../Button/Button";
import './ProductItem.css';
import { NavLink } from 'react-router-dom';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { TelegramShareButton, TelegramIcon } from 'react-share';
const webAppUrl = 'https://tg-web-app-react-teal.vercel.app';


const ProductItem = ({product, className, onAdd, index}) => {

    const onAddHandler = () => {
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
        <NavLink to ={`/product/${index}` }>
        <div className={'product ' + className}>
        <div style={{ position: 'relative' }}> {/* Добавляем контейнер с относительным позиционированием */}
           
            <Button className='favorite-btn' onClick={toggleFavorite}>
                {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
            </Button>
            <img
                src={product.img}
                alt="Product img"
                className='img'
            />
             {/* Иконка пересылки */}
             <TelegramShareButton 
                    url={`https://tg-web-app-react-teal.vercel.app/product/${index}`} 
                    title={product.title}
                    style={{ position: 'absolute', top: 10, right: 10 }}
            >
            <TelegramIcon size={32} round />
            </TelegramShareButton>

        </div>
       
            <div className={'title'}>{product.title}</div>
           {/* <div className={'id'}>{index}</div>*/} 
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
    
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
        </NavLink>
    );
};

export default ProductItem;
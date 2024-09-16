import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';
import { NavLink } from 'react-router-dom';



const ProductItem = ({product, className, onAdd, index}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <NavLink to ={`/product/${index}` }>
        <div className={'product ' + className}>
           <img
           src = {product.img}
           alt = "Product img"
           className='img'
           />
          {/*  <div className={'img'}  />*/} 
          {/* <img class="logo" src="/images/apple.jpg" alt="My_Logo"></img> */} 
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
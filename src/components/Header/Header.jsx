import React from 'react';
import Button from  "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

 const Header = () => {
   const{user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick ={onClose}>Закрыть</Button>
            <span className={'username'}>
             Добро пожаловать {user?.username}!
            </span>
            <h1>Рады видеть Вас в нашем Mini App!</h1>
        </div>
    );
 };
 
 export default Header;
import React from 'react';
import Button from  "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

 const Header = () => {
   const{user, onClose} = useTelegram();

    return (
        <div className={'header'}>
           {/* <Button onClick ={onClose}>Закрыть</Button>*/}
            <span className={'username'}>
             Добро пожаловать {user?.username}!
            </span>
            <h3 className={'welcome'}>Рады видеть Вас в нашем Mini App!</h3>
        </div>
    );
 };
 
 export default Header;
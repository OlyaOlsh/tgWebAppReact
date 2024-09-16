import React from 'react';
import Button from  "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';
import headerImage  from "./../../imagesItem/headerImage.png";

 const Header = () => {
   const{user, onClose} = useTelegram();

    return (
        <div className={'header'}>
              <img src={headerImage} alt="Header Background" className='header-image' />
           {/* <Button onClick ={onClose}>Закрыть</Button>*/}
            <span className={'username'}>
             Добро пожаловать {user?.username}!
            </span>
            {/*<h3 className={'welcome'}>Рады видеть Вас в нашем Mini App!</h3>*/}
        </div>
    );
 };
 
 export default Header;
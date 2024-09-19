import './Navbar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className = {'nav'}>
            <div className={'container'}>
                <div className={'nav-row'}>
                    <NavLink  to = "/" className='Logo'>
                    <strong>Logo_link</strong> Company
                    </NavLink>
                   
                    <ul className = {"nav-list"}>
                    <NavLink to  ="/" className ="nav_list_home">каталог</NavLink>
                  {/*  <NavLink to  ="/itempage" className ="nav_list_home">продукт</NavLink>*/}
                    <NavLink to  ="/contacts" className ="nav_list_home">контакты</NavLink>
                    <NavLink to  ="/addproducts" className ="nav_list_home">добавить</NavLink>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;

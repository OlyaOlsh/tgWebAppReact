import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={'nav'}>
            <div className={'container_nav'}>
                <div className={'nav-row'}>
                    <NavLink to="/home" className='Logo'>
                        <strong>Logo</strong> 
                    </NavLink>
                    <ul className={"nav-list"}>
                        <NavLink to="/" className="nav_list_home">каталог</NavLink>
                        <NavLink to="/contacts" className="nav_list_home">контакты</NavLink>
                       {/* <NavLink to="/addproducts" className="nav_list_home">добавить</NavLink>*/}
                        <NavLink to="/preAddPro" className="nav_list_home">админ_1</NavLink>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;




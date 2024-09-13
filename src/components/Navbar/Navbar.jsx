import './Navbar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className = {'nav'}>
            <div className={'container'}>
                <div className={'nav-row'}>
                    <NavLink  to = "/" className='Logo'>
                    <strong>Logo_link</strong> NameCompany
                    </NavLink>
                   
                    <ur className = {"nav-list"}>
                    <NavLink to  ="/" className ="nav_list_home">Home</NavLink>
                    <NavLink to  ="/itempage" className ="nav_list_home">Item</NavLink>
                    <NavLink to  ="/contacts" className ="nav_list_home">Contacts</NavLink>
                    </ur>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;

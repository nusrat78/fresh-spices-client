import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo.png';
import './Header.css'


const Headers = () => {
    return (
        <nav className='header'>
            <div className='header-img'>
                <img src={logo} alt=""></img>
            </div>
            <div className='nabvar'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
            </div>

        </nav>
    );
};

export default Headers;
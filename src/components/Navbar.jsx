import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [isActive, setActive] = useState(false);
    const location = useLocation();
    const items = document.getElementsByClassName('nav-item');
    const logo = document.getElementById('logo');

    const toggleHamburger = () => {
        setActive(!isActive);
    };

    const toggleDropdown = () => {
        if (isActive)
            setActive(!isActive);
    }

    useEffect(() => {
        if (logo) {
            if (location.pathname === '/')
                logo.classList.add('active');
            else
                logo.classList.remove('active');
        }

        if (items) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].innerHTML.toLowerCase() === location.pathname.substring(1))
                    items[i].classList.add('active');
                else
                    items[i].classList.remove('active');
            }
        }
    }, [logo, items, location]);

    return (
        <div className='navbar' onClick={toggleDropdown}>
            <div className='wrapper'>
                <div className='nav-left'>
                    <Link to='/'>
                        <div className='logo' id='logo'>
                            <div className='left'>K</div>
                            <div className='right'>K</div>
                        </div>
                    </Link>
                </div>
                <div className='nav-right'>
                    <Link to='/about'>
                        <div className='nav-item'>About</div>
                    </Link>
                    <Link to='/projects'>
                        <div className='nav-item'>Projects</div>
                    </Link>
                    <Link to='/contact'>
                        <div className='nav-item'>Contact</div>
                    </Link>
                </div>
                <div className={isActive ? 'nav-hamburger is-active' : 'nav-hamburger'} id='hamburger' onClick={toggleHamburger}>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
            </div>
            <div className={isActive ? 'dropdown-menu is-active' : 'dropdown-menu'}>
                <Link to='/about'>
                    <div className='nav-item'>About</div>
                </Link>
                <Link to='/projects'>
                    <div className='nav-item'>Projects</div>
                </Link>
                <Link to='/contact'>
                    <div className='nav-item'>Contact</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
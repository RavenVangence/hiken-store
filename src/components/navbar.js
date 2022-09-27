import React from 'react';

//ICONS
import {FaSearch, FaShoppingCart, FaUserAlt} from 'react-icons/fa';
import {GiFireAce} from 'react-icons/gi';

const navbar = () => {
  return <>
    <section className='navbar-container'>
        <div className='logo-container'>
            <GiFireAce id='fire-ace-icon'/>
            <h1>HIKEN</h1>
        </div>
        <div className='search-container'>
            <input type="text" />
            <FaSearch id='search-icon'/>
        </div>
        <div className="cart-user-container">
            <FaShoppingCart id='cart-icon'/>
            <FaUserAlt id='user-icon'/>
        </div>
    </section>
  </>
}

export default navbar;
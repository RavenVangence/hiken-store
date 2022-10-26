import React from 'react';

//ICONS
import {FaSearch, FaShoppingCart, FaUserAlt} from 'react-icons/fa';
import {GiFireAce} from 'react-icons/gi';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import {setIsCartOpenTrue} from '../features/products/cart-slice.js'

const Navbar = () => {
  const dispatch = useDispatch();

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
            <FaShoppingCart 
              id='cart-icon' 
              onClick={() => {
                dispatch(setIsCartOpenTrue())
              }}/>
            <FaUserAlt id='user-icon'/>
        </div>
    </section>
  </>
}

export default Navbar;
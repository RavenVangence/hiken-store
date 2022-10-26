import React from 'react';
// PAGES
import Navbar from './navbar.js';
import Home from './home';
import Products from './products.js';
import ProductView from './product-view.js';
import Cart from './cart.js';

//CSS
import '../css/global.css';

//REDUX
import {useDispatch, useSelector} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const {isBeingViewed} = useSelector((store) => store.productView)
  const {isCartOpen} = useSelector((store) => store.cartSlice)

  return (
    <div className='app-container'>
      <Navbar/>
      <Home/>
      <Products/>
      {isBeingViewed && <ProductView/>}
      {isCartOpen && <Cart/>}
    </div>
  )
  
  

}

export default App;
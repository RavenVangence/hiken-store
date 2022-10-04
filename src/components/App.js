import React from 'react';
// PAGES
import Navbar from './navbar.js'
import Home from './home';
import Products from './products.js';
import Filter from './filter.js';

//CSS
import '../css/global.css'

const App = () => {
  
  return <div className='app-container'>
    <Navbar/>
    <Home/>
    <Filter/>
    <Products/>
  </div>

}

export default App;
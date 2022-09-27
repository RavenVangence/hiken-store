import React from 'react';
// PAGES
import Navbar from './navbar.js'
import Home from './home';
import Products from './products.js';

//CSS
import '../css/global.css'

const App = () => {
  return <div className='app-container'>
    <Navbar/>
    <Home/>
    <Products/>
  </div>

}

export default App;
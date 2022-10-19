import React from 'react';
// PAGES
import Navbar from './navbar.js';
import Home from './home';
import Products from './products.js';

//CSS
import '../css/global.css';

// REDUX
import { store } from './store.js';
import { Provider } from 'react-redux';


const App = () => {
  
  return <Provider store={store}>
    <div className='app-container'>
      <Navbar/>
      <Home/>
      <Products/>
    </div>
  </Provider>
  
  

}

export default App;
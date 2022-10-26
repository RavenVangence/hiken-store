import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

//PAGES
import App from './components/App.js';

import {store} from '../src/components/store.js'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

//PAGES
import App from './components/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
      <App />
    </Router>
);

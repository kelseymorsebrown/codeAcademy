import React from 'react';
import ReactDOM from 'react-dom/client';

// To change which project renders, update the directory in the following imports
import './passing-thoughts-effect-hook/styles.css';
import App from './passing-thoughts-effect-hook/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

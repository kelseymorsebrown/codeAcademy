import React from 'react';
import ReactDOM from 'react-dom/client';

// To change which project renders, update the directory in the following imports
import './authorization-form/styles.css';
import App from './authorization-form/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

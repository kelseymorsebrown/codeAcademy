import React from 'react';
import ReactDOM from 'react-dom/client';

// To change which project renders, update the directory in the following imports
import './cute-guinea-pigs-patterns/styles.css';
import App from './cute-guinea-pigs-patterns/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

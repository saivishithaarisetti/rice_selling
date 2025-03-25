import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


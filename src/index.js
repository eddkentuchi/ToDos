import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './todoSrc/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode ayuda a detectar y prevenir problemas de concurrencia en el desarrollo
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

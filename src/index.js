import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '/Users/navid/Documents/NavidInc/portfoliov2/src/pages/App.js';
import Animation from '/Users/navid/Documents/NavidInc/portfoliov2/src/pages/CodingAnimation.js'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

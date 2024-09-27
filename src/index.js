import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/hello';
import Greetings from './components/Greetings';
import Guten from './components/Guten';
import Follow from './components/Follow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello/>
      <Greetings></Greetings>
      <Guten name="Stallone"></Guten>
      <Guten name="Mark"></Guten>
      <Guten name="Michael"></Guten>
      <Follow/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

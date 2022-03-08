import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';

ReactDOM.render(<React.StrictMode> 
  <App />
</React.StrictMode>
, document.querySelector('#root'));

// const renderH1 = document.querySelector('#root');
// ReactDOM.render(<App />, renderH1);
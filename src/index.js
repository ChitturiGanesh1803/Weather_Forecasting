// import React from "react";
// import ReactDOM from "react-dom/client"; // ✅ Use "react-dom/client"
// import "./styles/index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import ShoppingStore from './Redux/ShoppingStore.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ShoppingStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

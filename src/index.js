import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store }from 'redux/store';
import { BrowserRouter } from "react-router-dom";

import App from './App';

import './index.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/react_node_fs72_Pavlo-V-M">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

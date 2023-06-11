import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Store/store'
import { Provider } from 'react-redux'
import {RouterProvider} from "react-router"
import router from "./router"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <RouterProvider router = {router}/>
    </Provider>
);


reportWebVitals();
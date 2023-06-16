import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import {Provider} from 'react-redux'
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    
    </Provider>
  </React.StrictMode>
);

=======
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./Store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
);
>>>>>>> origin/prsanjeet

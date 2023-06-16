import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import {Provider} from 'react-redux'
import App from './App';
=======
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
>>>>>>> origin/mansii
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
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
=======
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
>>>>>>> origin/mansii

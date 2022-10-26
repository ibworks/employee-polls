import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers';
import { createStore,applyMiddleware,compose } from 'redux'
import './index.css';
import thunk from 'redux-thunk'
import {getAll as GetAllUsers } from "./actions/users";

const container = document.getElementById('root');
const root = createRoot(container);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

store.dispatch(GetAllUsers());

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import store from './store';
import './index.css';
import { Provider } from 'react-redux';
console.log('测试jenkins');
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
);

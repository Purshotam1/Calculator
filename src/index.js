import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import {Provider} from 'react-redux';
var store=createStore(reducers,applyMiddleware(logger));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));



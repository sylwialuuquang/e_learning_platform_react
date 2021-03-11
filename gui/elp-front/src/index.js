import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './store/reducers/auth'


const composeEnhances = window.__REDUX_DEVTOOLS_ETENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


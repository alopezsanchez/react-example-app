import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './Reducers/index';
import App from './App';
import './index.css';
import products from './data/products';


injectTapEventPlugin();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
const store = createStore(reducer, {
  cart: {},
  products
}, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

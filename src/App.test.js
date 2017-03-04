import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './Reducers/index';
import App from './App';
import products from './data/products';


it('renders without crashing', () => {
  const div = document.createElement('div');

  injectTapEventPlugin();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, {
    cart: {},
    products
  }, composeEnhancers(applyMiddleware(thunk)));

  ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>, div);
});

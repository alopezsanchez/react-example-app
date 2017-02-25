import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import products from './data/products';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <App products={products}/>
  </MuiThemeProvider>,
  document.getElementById('root')
);

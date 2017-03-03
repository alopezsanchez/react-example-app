import React, {Component} from 'react';
import { createStore } from 'redux';

import ProductsList from './Components/ProductsList/ProductsList';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';

import * as types from './Actions/types';

import reducer from './Reducers/index';

import AppBar from 'material-ui/AppBar';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.update = this.update.bind(this);

    // Se instancia la store de redux
    this.store = createStore(reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    this.state = {
      selected: this.props.products[0]
    }
  }

  select(product) {
    console.log(`${product.name}. ${product.prize}€ `);

    this.setState({
      selected: product
    });
  }

  addToCart() {
    const selected = this.state.selected.id;
    this.store.dispatch({
      type: types.ADD_TO_BASKET,
      id: selected
    })
  }

  componentDidUnmount() {
    this.unsubscribe();
  }

  componentDidMount () {
    this.unsubscribe = this.store.subscribe(this.update);
  }

  update() {
    this.forceUpdate();
  }

  render() {
    const cart = this.store.getState();
    return (
      <div className="App">
        <AppBar className="app-bar" title="React Shop" />
        <ProductsList select={this.select} products={this.props.products}></ProductsList>
        <ProductDetail addToCart={this.addToCart} product={this.state.selected}></ProductDetail>
        <Cart cart={cart} products={this.props.products}></Cart>
      </div>
    );
  }
}

export default App;

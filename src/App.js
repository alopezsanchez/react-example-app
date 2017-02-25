import React, {Component} from 'react';
import { createStore } from 'redux';

import ProductsList from './Components/ProductsList/ProductsList';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';

import reducer from './Reducers/index';

import AppBar from 'material-ui/AppBar';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
    this.addToCart = this.addToCart.bind(this);

    // Se instancia la store de redux
    this.store = createStore(reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    this.state = {
      selected: this.props.products[0],
      cart: {}
    }
  }

  select(product) {
    console.log(`${product.name}. ${product.prize}€ `);

    this.setState({
      selected: product
    });
  }

  addToCart() {
    this.setState((prevState) => {
      const product = prevState.selected;
      const productInCart = prevState.cart[product.id] || {
        product: product,
        quantity: 0
      };
      productInCart.quantity++;

      return {
        cart: Object.assign({}, prevState.cart, {[product.id]: productInCart})
      }
    });
  }

  increment() {
    this.store.dispatch({
      type: 'INCREMENT'
    })
  }

  render() {
    return (
      <div className="App" onClick={this.increment.bind(this)}>
        <AppBar className="app-bar" title="React Shop" />
        <ProductsList select={this.select} products={this.props.products}></ProductsList>
        <ProductDetail addToCart={this.addToCart} product={this.state.selected}></ProductDetail>
        {<Cart cart={this.state.cart}></Cart>}
      </div>
    );
  }
}

export default App;

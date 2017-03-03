import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsList from './Components/ProductsList/ProductsList';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import * as actionCreators from './Actions/actionCreators';
import AppBar from 'material-ui/AppBar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      selected: this.props.products[0],
      loading: false
    }
  }

  select(product) {
    console.log(`${product.name}. ${product.prize}€ `);

    this.setState({
      selected: product
    });
  }

  addToCart() {
    this.setState({
      loading: true
    });
    const selected = this.state.selected.id;
    this.props.addToCartAsync(selected).then(() => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const cart = this.state.loading ? <h3>Loading cart...</h3> : <Cart cart={this.props.cart} products={this.props.products}></Cart>
    return (
      <div className="App">
        <AppBar className="app-bar" title="React Shop" />
        <ProductsList select={this.select} products={this.props.products}></ProductsList>
        <ProductDetail addToCart={this.addToCart} product={this.state.selected}></ProductDetail>
        {cart}
      </div>
    );
  }
}

// Funciones de React-Redux

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  }
};

const mapDispatchToProps = (dispatch) => {
  // Ambas opciones son válidas
  // La siguiente es la más cómoda y común
  return bindActionCreators(actionCreators, dispatch);

  /*return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    }
  };*/
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

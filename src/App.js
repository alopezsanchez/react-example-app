import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';


import Home from './Components/Home/Home';
import NotFound from './Components/ProductDetail/NotFound';
import ProductsList from './Components/ProductsList/ProductsList';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import * as actionCreators from './Actions/actionCreators';
import AppBar from 'material-ui/AppBar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.renderProductDetail = this.renderProductDetail.bind(this);

    this.state = {
      loading: false
    };
  }

  addToCart(item) {
    this.setState({
      loading: true
    });
    this.props.addToCartAsync(item.id).then(() => {
      this.setState({
        loading: false
      });
    });
  }

  renderProductDetail(id) {
    const product = this.props.products.find(product => product.id === +id)
    return product ? <ProductDetail addToCart={this.addToCart} product={product}/> : <NotFound />
  }

  render() {
    const cart = this.state.loading ? <CircularProgress size={60} thickness={5}/> : <Cart updateCart={this.props.updateCart} cart={this.props.cart} products={this.props.products}></Cart>
    return ( 
      <Router>
        <div className="App">
          <AppBar iconElementRight={<Link to="/cart"><IconButton><CartIcon color="white"/></IconButton></Link>} className="app-bar" title="React Shop" />
          <Route exactly path="/" render={() => <ProductsList select={this.select} products={this.props.products}></ProductsList>}></Route>
          <Route path="/cart" render={() => cart}></Route>
          <Route path="/detail/:id" render={(props) => this.renderProductDetail(props.match.params.id)}></Route> 
            {/*<AppBar className="app-bar" title="React Shop" />
            <ProductsList select={this.select} products={this.props.products}></ProductsList>
            <ProductDetail addToCart={this.addToCart} product={this.state.selected}></ProductDetail>
            {cart}  */}
        </div>
      </Router> 
    );
  }
}

// Funciones de React-Redux

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
    shipping: state.shipping
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

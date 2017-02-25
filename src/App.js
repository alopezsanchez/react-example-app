import React, {Component} from 'react';
import ProductsList from './Components/ProductsList/ProductsList';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.select = this.select.bind(this);

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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React Shop</h2>
        </div>
        <ProductsList select={this.select} products={this.props.products}></ProductsList>
        <ProductDetail product={this.state.selected}></ProductDetail>
      </div>
    );
  }
}

export default App;

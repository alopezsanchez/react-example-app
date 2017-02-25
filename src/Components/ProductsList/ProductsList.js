import React, { Component } from 'react';
import Product from '../Product/Product';
import {GridList} from 'material-ui/GridList';

class ProductsList extends Component {
    render() {
        return (
            <GridList>
                {this.props.products.map(product => <Product selectThis={ () => this.props.select(product) } 
                    key={product.id} product={product}></Product>)}
            </GridList>
        );
    }
}

export default ProductsList;
import React, { Component } from 'react';
import Product from '../Product/Product';
import {GridList} from 'material-ui/GridList';
import {Card} from 'material-ui/Card';

class ProductsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: props.products
        }

        this.toggleStar = this.toggleStar.bind(this);
    }

    toggleStar(productStar) {
        this.setState((prevState) => {
            products: prevState.products.map(product => {
                if (productStar.id === product.id) {
                    product.starred = !product.starred;
                }
                return product;
            });
        });
    }

    render() {
        const products = this.state.products.map(product => <Product toggleStar={this.toggleStar} 
                    key={product.id} product={product}></Product>);

        products.sort((a, b) => {
            return a.props.product.starred === b.props.product.starred ? 0 : a.props.product.starred  ? -1 : 1;
        });

        return (
            <Card className="card-list">
                <GridList>
                    {products}
                </GridList>
            </Card>
        );
    }
}

export default ProductsList;
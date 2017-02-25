import React, {Component} from 'react';

class ProductDetail extends Component {
    render() {
        return ( 
        <div>
            <div>
                <h4>{this.props.product.name}</h4>
                <h5>{this.props.product.prize}€</h5>
            </div> 
        </div>
        );
    }
}

export default ProductDetail;